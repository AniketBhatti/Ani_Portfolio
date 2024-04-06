import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Laundry Management",
    img: "https://images.pexels.com/photos/7282378/pexels-photo-7282378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "We've prioritized simplicity and efficiency, allowing users to effortlessly select their laundry items, schedule pickup and delivery times, and receive a transparent breakdown of their total bill.",
  },
  {
    id: 2,
    title: "Shoe Website in Django",
    img: "https://images.pexels.com/photos/5088874/pexels-photo-5088874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "I have implemented a sophisticated backend architecture utilizing Django's Model-View-Controller (MVC) design pattern. This allows for efficient data management and organization, ensuring optimal performance and scalability to grow the platform.",
  },
  {
    id: 3,
    title: "UI for INA",
    img: "https://cdn.dribbble.com/users/3416941/screenshots/14962021/media/1c65afc5ac6e81ec5ffda9a026e31e0c.jpg?resize=1000x750&vertical=center",
    desc: "As the UI/UX designer for the INA project, I've dedicated my efforts to crafting intuitive interfaces for donors, NGOs, and beneficiaries. Through research and iterative design, I've honed my skills in wireframing, prototyping, and usability testing. My goal is to empower users to navigate seamlessly and make a positive impact. Join me in elevating UX design with the INA project.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;