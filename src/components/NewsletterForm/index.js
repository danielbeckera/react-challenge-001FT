import { Form } from "./styles";

export function NewsletterForm() {
  return (
    <Form>
      <input type="text" placeholder="Your name" />
      <input type="email" placeholder="Your email" />
      <button type="submit">Send</button>
    </Form>
  );
}
