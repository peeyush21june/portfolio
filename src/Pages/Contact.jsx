import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import ContactForm from "../Components/ContactForm";
import SocialLinks from "../Components/SocialLinks";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-12 py-10 flex flex-col items-center"
    >
      <div className="w-full h-full flex flex-col">
        <div className="w-full">
          <SectionTitle title="CONTACT" subtitle="Get in touch" />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full flex justify-center items-center">
            
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full h-full p-4 flex flex-col justify-center sm:flex-row gap-4"
              >
              {/* <div className="flex justify-center"></div> */}
              <ContactForm />
            </m.div>
          </LazyMotion>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
