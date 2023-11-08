import React from "react";
import { motion } from "framer-motion";
import me from "../../images/WhatsApp Image 2023-10-11 at 8.31.04 PM-fotor-bg-remover-20231027211158.png";
function Founder() {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="founder" height={200} width={200} />
        <h3>Nitish Kumar</h3>
        <p>
          Hey, Everyone I am , the founder of Baba Pani Puri.
          <br />
          Our aim is to create the most tasty Pani Puri on planets
        </p>
      </motion.div>
    </section>
  );
}

export default Founder;
