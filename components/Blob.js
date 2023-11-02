"use client";

export default function Blob() {
    return (
        <div className="absolute mx-auto max-w-lg h-80 w-full opacity-70 dark:opacity-50 pointer-events-none">
            <div className="absolute -left-4 w-72 h-72 bg-purple-300 dark:bg-blue-300 rounded-full mix-blend-multiply blur-xl animate-blob"></div>
            <div className="absolute -right-4 w-72 h-72 bg-yellow-300 dark:bg-green-300 rounded-full mix-blend-multiply animate-blob blur-xl animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-yellow-300 rounded-full mix-blend-multiply animate-blob blur-xl animation-delay-4000"></div>
        </div>
    );
}
