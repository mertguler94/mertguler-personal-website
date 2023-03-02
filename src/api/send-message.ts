export interface MessageType {
  email: string;
  name: string;
  message: string;
  subject: string;
}

export default async function sendMessage(msg: MessageType) {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msg),
    });

    if (res.ok) {
      const resData = await res.json();
      // return repos;
    }
  } catch (err) {
    console.error(err);
  }
}
