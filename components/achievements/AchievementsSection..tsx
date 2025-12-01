export default function AchievementsSection() {
  return (
    <section id="achivement" className="achivement_text">
      <div className="container">
        <h1 className="text-center mb-4">ACHIEVEMENTS</h1>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 impct_per">
            <div className="work_heading education_mt">
              <h2>Impact</h2>
            </div>
            <p>
              HWF's influence on the lives of those it has reached has been remarkable. 
              Regardless of the nature of the need, our organization has consistently provided its utmost 
              and offered assistance whenever feasible. Even with the challenges posed by limited resources 
              and funding, HWF's efforts have resonated deeply, touching hearts and leaving a lasting positive impact.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="impact_img">
              <img
                src="images/1692611879823.jpg"
                alt="impact_img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========== INNOVATIONS SECTION ========== */}

      <section id="middle_sect">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="inovation_img">
                <img
                  src="/images/1692611879823.jpg"
                  alt="Innovation"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="heding education_mt">
                <h2>Innovations</h2>
              </div>

              <div className="inovate_text">
                <p>
                  The vision we hold is truly ambitious and transformative. The plan to broaden our scope and 
                  address the needs of communities across Maharashtra in the near future is a testament to our 
                  unwavering dedication. By setting our sights on extending our reach to encompass all of India 
                  by 2026, HWF is demonstrating a profound commitment to making a significant and far-reaching difference.
                </p>

                <p>
                  Through our actions and aspirations, HWF shines as a beacon of compassion, empathy, and hope. 
                  As we continue on our path of expanding and enhancing our efforts, may our determination inspire 
                  others and pave the way for a brighter, more equitable future for all. Our work and initiatives 
                  serve as an inspiration to us all, and the lives we've touched stand as a testament to the 
                  positive change we're trying to bring to the world.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
}
