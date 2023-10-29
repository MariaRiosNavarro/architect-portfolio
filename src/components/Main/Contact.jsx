import Button from "../Button/Button";
import "./Contact.scss";

const Contact = () => {
  return (
    <article className="contact-wrapper">
      <h2>Contact Us</h2>
      <div className="contact-sm-wrapper">
        <form>
          <label htmlFor="name">
            <h4>Name</h4>
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="phone">
            <h4>
              Phone Number<span>*</span>
            </h4>

            <input
              type="text"
              className="input-required"
              name="phone"
              id="phone"
            />
          </label>
          <label htmlFor="email">
            <h4>
              Email<span>*</span>
            </h4>

            <input
              type="text"
              className="input-required"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="interessed">
            <h4>Interessed in</h4>
            <input type="text" name="interessed" id="interessed" />
          </label>
          <label htmlFor="area">
            <h4>
              Message<span>*</span>
            </h4>

            <textarea
              type="text"
              name="area"
              rows={14}
              className="input-required"
              id="area"
            />
          </label>
        </form>
        <div className="contact-img-wrapper">
          <img src="./home/img10.jpeg" alt="someone at phone" />
        </div>
      </div>
      <Button name="SEND EMAIL"></Button>
    </article>
  );
};

export default Contact;
