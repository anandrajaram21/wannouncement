import Head from "next/head";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "@radix-ui/react-icons";
import * as React from "react";

export default function Home() {
  const initialValues = {
    message: "",
    date: "",
    time: "",
    venue: "",
    agenda: "",
  };
  const [values, setValues] = useState(initialValues);
  const [finalMessage, setFinalMessage] = useState<string>("");
  const [buttonText, setButtonText] = useState("Copy to Clipboard");

  const copyToClipboard = () => {
    void navigator.clipboard.writeText(finalMessage);
    setButtonText("Copied!");
    // wait for 1 second before changing back to "Copy to Clipboard"
    setTimeout(() => {
      setButtonText("Copy to Clipboard");
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFinalMessage(finalMessage);

    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    const message = `
⭕⭕⭕⭕⭕⭕⭕⭕⭕

*ANNOUNCEMENT*

${values.message}

*Date:* ${values.date}
*Time:* ${values.time}
*Venue:* ${values.venue}
*Agenda:* ${values.agenda}

_Acknowledge once read_
    `;

    setFinalMessage(message);
  }, [values]);

  return (
    <>
      <Head>
        <title>WAnnouncement</title>
      </Head>
      <main className="h-screen">
        <h1 className="p-5 text-center text-4xl font-bold">
          Create a WhatsApp Announcement
        </h1>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <div className="flex w-full flex-col gap-5 p-5 md:w-1/2">
            <Label>Message</Label>
            <Input
              placeholder="Message"
              value={values.message}
              name="message"
              onChange={handleInputChange}
            />

            <Label>Date</Label>
            <Input
              placeholder="Date"
              value={values.date}
              name="date"
              onChange={handleInputChange}
            />

            <Label>Time</Label>
            <Input
              placeholder="Time"
              value={values.time}
              name="time"
              onChange={handleInputChange}
            />

            <Label>Venue</Label>
            <Input
              placeholder="Venue"
              value={values.venue}
              name="venue"
              onChange={handleInputChange}
            />

            <Label>Agenda</Label>
            <Input
              placeholder="Agenda"
              value={values.agenda}
              name="agenda"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex w-full flex-col gap-5 p-5 md:w-1/2">
            <Label>Final Message</Label>
            <Textarea placeholder="Message" value={finalMessage} rows={20} />
            <Button onClick={() => copyToClipboard()}>
              <CopyIcon className="mr-2 h-4 w-4" />
              {buttonText}
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
