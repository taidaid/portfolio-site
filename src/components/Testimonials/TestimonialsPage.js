import React from "react";
import { Container, Row, Media } from "react-bootstrap";

import Testimonial from "./Testimonial";

const TestimonialsPage = () => {
  return (
    <Container fluid className="align-items-center col-12">
      <Row className="justify-content-center Testimonials">
        <Media className="">
          <Media.Body className="testimonial-body">
            <p>
              I have had great success in prioritizing collaboration and
              relationships. A great team chemistry is hard to beat. The
              effectiveness of this philosophy can be seen in some of my
              favorite testimonials from satisfied clients and colleagues.
            </p>
          </Media.Body>
        </Media>
        <Testimonial
          name={"Remi Appels"}
          title={"Solution Architect"}
          expandTextLink={""}
          firstSnippet={`Bryan is a developer with a high sense of responsibility and 
            very involved in the projects he works on. Not only his programmer skills 
            but also mathematical skills are great. Bryan is studious and even tries to 
            understand all the work outside his comfort zone, like backend functionality. 
            And most importantly, an extremely nice colleague to work with!`}
        />
        <Testimonial
          name={"John Whaley"}
          title={"Executive Vice President"}
          expandTextLink={" Read more..."}
          firstSnippet={`As the Executive Vice President of a growing company, I had the
        pleasure of working with Mr. Windsor for several years. Mr.
        Windsor served as the Director of Information Technology and
        reported directly to me. I was always impressed by Mr. Windsor’s
        positive attitude, quest for knowledge, and maturity.`}
          secondSnippet={`Mr. Windsor’s intelligence, work ethic, and desire to learn are
        demonstrated characteristics that would lead to success in an
        academic program. I can also attest to Mr. Windsor’s ethical and
        moral character. He has a very approachable personality and
        works well with others.`}
        />
        <Testimonial
          name={"Alex Levitt"}
          title={"Consultant, Applied Behavioral Science"}
          expandTextLink={" Read more..."}
          firstSnippet={`Bryan and I have worked on several React and JavaScript
                applications within the last year. He’s been an excellent coding
                collaborator and a strong communicator. He’s someone who truly
                loves to learn, and his ability to quickly grasp, implement,
                explore and debug new technologies has impressed me many times.`}
          secondSnippet={`He’s highly motivated,
          technically inclined, and his drive and dedication to goals are an
          asset to any project he’s a part of.`}
        />
        <Testimonial
          name={"Ryan Harrington"}
          title={"Senior Teacher"}
          expandTextLink={" Read more..."}
          firstSnippet={`Bryan spent 3 years as a teacher for Head Start English School
          in Taipei, Taiwan. He was well liked and respected by his
          colleagues and his supervisors. He was extremely self
          motivating; attending Chinese classes in the morning while
          teaching afternoons and evenings.`}
          secondSnippet={`Bryan was creative and patient
          with his students. He taught both assigned curriculum as well as
          classes he developed himself. Bryan required very little
          training or supervision as he understood and executed his
          position with excellence. Bryan left this position when he moved
          away from Taiwan. He would certainly be welcomed back.`}
        />
        <Testimonial
          name={"Todd Pennington"}
          title={"Strategic Account Manager"}
          expandTextLink={""}
          firstSnippet={`I have known Bryan for close to a year as our companies have
          partnered on numerous technology projects and service
          enhancements. Bryan is extremely professional. He knows the inner
          workings of his business and has a strong work-ethic, not to
          mention a level of interest in technology that is far above others
          in similar roles.`}
        />
        <Testimonial
          name={"Huey"}
          title={"Student"}
          expandTextLink={" Show Translation..."}
          firstSnippet={`  Bryan和Huey已经磨合的比较好，老师会在Huey已经掌握的情况下进行适当拓展，
          非常棒的老师，还自学了中文，可以辅助教学，就是比较难约，希望有机会来广州旅行，
          Huey带你去吃好吃的，毕竟食在广州嘛!`}
          secondSnippet={`Bryan and Huey already get along well. The teacher expands
          appropriately according to what Huey has already mastered. He is a
          very good teacher, who has also taught himself Chinese. Can you
          help us? It's just that it is quite difficult to book your
          classes. We hope you have the opportunity to travel to Guangzhou.
          Huey will take you to eat delicious food!`}
        />
        <Testimonial
          name={"Vivian"}
          title={"Student"}
          expandTextLink={" Show Translation..."}
          firstSnippet={`特别棒的老师，善于引导，善于和孩子交流，总能用最合适的方式讲授新内容！希望能一直约到您的课！`}
          secondSnippet={`An especially excellent teacher, good at guiding, good at
          communication with children, and always able to use the most
          appropriate way to teach new content! I hope to be able to book
          your class!`}
        />
        <Testimonial
          name={"Tiger"}
          title={"Student"}
          expandTextLink={""}
          firstSnippet={`  Thanks for [your] kindness and patience [when] Tiger was naughty
          in the class. Tiger really enjoyed your class and he loves to
          study with you.`}
        />
        <Testimonial
          name={"Benson"}
          title={"Student"}
          expandTextLink={" Show Translation..."}
          firstSnippet={`超级遗憾没有抢到Bryan老师的专属教师设置。Bryan老师对benson特别包容，
          也能够严格帮他纠正各种问题，小朋友最喜欢的老师`}
          secondSnippet={`I really regret not getting onto Teacher Bryan's exclusive schedule. 
          Teacher Bryan is particularly tolerant of benson, but
          still strictly corrects all kinds of problems. He is my 
          child's favorite teacher.`}
        />
        <Testimonial
          name={"David"}
          title={"Student"}
          expandTextLink={" Show Translation..."}
          firstSnippet={`Bryan老师，希望您给David放课，自从第一次上过您的课后David就成了您忠实的粉丝，
          您是个难得的好老师，可是您的课真心不好约，每个星期一我都来看您的课时，好不容易约上了您的一节课，
          也就是说好不容易有了优先约课的机会，希望您能给我放课～～～^_^`}
          secondSnippet={`Mr. Bryan, I hope you will give David a lesson. Since the first
          time I attended your class, David has become a loyal fan of you.
          You are a rare good teacher, but your class is [difficult to
          book]. Every Monday I come to see your class. It's not easy to
          make an appointment with you and it's not easy to get priority booking. I
          hope you can give me a lesson ~ ^ _ ^`}
        />
      </Row>
    </Container>
  );
};

export default TestimonialsPage;
