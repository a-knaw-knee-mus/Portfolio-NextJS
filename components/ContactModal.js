import { Button, Modal, Textarea, TextInput } from "@mantine/core";
import { useReducer } from "react";
import emailjs from "@emailjs/browser"
import { showNotification } from "@mantine/notifications";

const reducer = (state, action) => {
  switch (action.type) {
    case "CLOSE_MODAL":
      return { ...state, name: "", subject: "", message: "" };
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_SUBJECT":
      return { ...state, subject: action.payload };
    case "UPDATE_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default function ContactModal({
  showContactModal,
  setShowContactModal,
}) {
  const [form, dispatch] = useReducer(reducer, {
    name: "",
    subject: "",
    message: "",
  });

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      subject: form.subject,
      message: form.message,
    };
    emailjs.send(
      "service_kacxihj",
      "template_a2edhn9",
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USERID
    )
    .then(
      (res) => {
        showNotification({
          title: "Thank you for your message",
          message: "I'll respond as soon as possible!",
        });
      },
      (error) => {
        showNotification({
          color: "red",
          title: "Internal Error",
          message: "Sorry, messages can't be sent at the moment :(",
        })
      }
    );
    dispatch({ type: "CLOSE_MODAL" });
    setShowContactModal(false)
  }

  return (
    <Modal
      opened={showContactModal}
      onClose={() => {
        dispatch({ type: "CLOSE_MODAL" })
        setShowContactModal(false)
      }}
      title="Contact Me"
      overlayOpacity={0.5}
      overlayBlur={3}
    >
      <TextInput
        value={form.name}
        onChange={(e) =>
          dispatch({ type: "UPDATE_NAME", payload: e.target.value })
        }
        data-autofocus
        label="Name"
      />
      <TextInput
        value={form.subject}
        onChange={(e) =>
          dispatch({ type: "UPDATE_SUBJECT", payload: e.target.value })
        }
        label="Subject"
      />
      <Textarea
        value={form.message}
        onChange={(e) =>
          dispatch({ type: "UPDATE_MESSAGE", payload: e.target.value })
        }
        label="Subject"
        placeholder="Include your email if you would like a reply"
        autosize
        minRows={2}
      />
      <div className="flex">
        <Button
          className="mt-5 border-[#228be6] ml-auto"
          disabled={
            form.name === "" || form.message === "" || form.subject === ""
          }
          variant="light"
          onClick={sendEmail}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
}
