import React from 'react';

interface DataType {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

const creative_service_data: DataType[] = [
  {
    id: 'One',
    emoji: '🎨',
    title: "Graphic Designing",
    description: `We build a powerful visual identity with stunning graphics that speak for your brand. From logos and brand kits to social media creatives and marketing materials.`,
  },
  {
    id: 'Two',
    emoji: '🎬',
    title: "Video Editing & Motion Graphics",
    description: `We bring your brand's narrative to life with professional video editing and dynamic motion graphics. From social media reels to corporate advertisements.`,
  },
  {
    id: 'Three',
    emoji: '✍️',
    title: "Copywriting",
    description: `Our words are crafted to connect, sell, and inspire action. We develop compelling content from social media captions to persuasive ad campaigns.`,
  },
  {
    id: 'Four',
    emoji: '🚀',
    title: "Strategic Implementation",
    description: `We ensure your creative content aligns with your business goals and reaches the right audience through strategic planning and execution.`,
  },
]

const CreativeContentAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Our Creative Specializations & Process
            </h4>
            <p className="cs_mp0 anim_text">
              Here's how our creative engine works, breaking down our core services into a clear, strategic process. 
              We combine artistic vision with marketing strategy to create content that not only looks amazing but drives real results for your business.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {creative_service_data.map((item, i) => (
                  <div key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                      <div className="cs_service_emoji" style={{
                        fontSize: '2.5rem',
                        position: 'absolute',
                        top: '20px',
                        right: '20px'
                      }}>
                        {item.emoji}
                      </div>
                    </div>

                    <h6 className="cs_work_title">{item.title}</h6>
                    <p className="cs_work_subtitle">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeContentAreaDetails;
