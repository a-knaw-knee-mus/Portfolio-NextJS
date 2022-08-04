import { Button, Modal, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";
import emailjs from "emailjs-com";
import { showNotification } from "@mantine/notifications";

export default function ContactModal({
  showContactModal,
  setShowContactModal,
}) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      name: name,
      subject: subject,
      message: message,
    };
    emailjs.send(
      "service_kacxihj",
      "template_a2edhn9",
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USERID
    );
    showNotification({
      title: "Thank you for your message",
      message: "I'll respond as soon as possible!",
    });
    setShowContactModal(false);
  }

  return (
    <Modal
      opened={showContactModal}
      onClose={() => setShowContactModal(false)}
      title="Contact Me"
      overlayOpacity={0.5}
      overlayBlur={3}
    >
      <TextInput
        onChange={(e) => setName(e.target.value)}
        data-autofocus
        label="Name"
      />
      <TextInput onChange={(e) => setSubject(e.target.value)} label="Subject" />
      <Textarea
        onChange={(e) => setMessage(e.target.value)}
        label="Subject"
        placeholder="Include your email if you would like a reply"
        autosize
        minRows={2}
      />
      <div className="flex">
        <Button
          className="mt-5 border-[#228be6] ml-auto"
          disabled={name === "" || message === "" || subject === ""}
          variant="light"
          onClick={sendEmail}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
}
