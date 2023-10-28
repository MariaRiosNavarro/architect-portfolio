import Button from "../Button/Button";

const Contact = () => {
  return (
    <article>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Interessed in" />
        <textarea type="text" placeholder="Message" />
        <Button name="SEND EMAIL"></Button>
      </form>
      <div className="contact-img-wrapper">
        <img src="/public/home/img10.jpeg" alt="someone at phone" />
      </div>
    </article>
  );
};

export default Contact;
