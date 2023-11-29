export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">contact me?</p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to {""}
            </p>
          </div>
        </div>
        <form id="contact-form" action="#">
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="送信" type="submit" />
        </form>
      </div>
    </section>
  );
}
