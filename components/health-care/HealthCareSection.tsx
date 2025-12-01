"use client";

export default function HealthCareSection() {
  return (
    <section id="health_care">
      <div className="work_heading helth_care_mt text-center container">
        <h2>HEALTH CARE</h2>

        <p>
          Many individuals residing in rural areas lack financial privileges and are not well-off. Consequently, when
          emergencies arise and medical assistance becomes necessary, a significant number of us are forced to
          reconsider due to the associated expenses, compounded by the absence of medical insurance coverage. In
          response, HWF is dedicated to supporting these individuals by addressing their needs and promptly delivering
          essential medical care.
        </p>
      </div>

      <div className="container my">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="helth_pera none_pera_title">
              <h4>Empowering Access: Promoting Insurance Awareness for Immediate Assistance</h4>
              <p>
                Furthermore, HWF aims to raise awareness about various insurance programs available, enabling individuals
                to proactively secure coverage. This proactive step ensures swift access to assistance whenever required.
                Through these efforts, HWF seeks to alleviate the burdens of immediate medical expenses and promote a
                culture of preparedness and well-being.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="helth_img">
              <img
                src="/images/1695811037836.jpg"
                alt="Healthcare"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
