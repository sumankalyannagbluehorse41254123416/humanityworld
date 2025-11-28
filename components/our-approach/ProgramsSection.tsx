"use client";

import Image from "next/image";

export default function ProgramsSection() {
  return (
    <section id="Programs">
      <div className="container">
        <div className="box_heading">
          <h2> Initiatives, Programs, and Activities by HWF:</h2>
        </div>

        <div className="row future">
          
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="box_same">
              <div className="icon_png">
                <Image
                  src="/images/1692432849636.png"
                  alt="Community Outreach"
                  width={50}
                  height={50}
                />
              </div>

              <div className="details_box">
                <h2>Community Outreach and Conversations</h2>
                <p>
                  HWF has been proactively reaching out to communities,
                  particularly those in need and facing despair. Through
                  face-to-face interactions, we have been engaging in meaningful
                  conversations to understand the challenges and concerns.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="box_same">
              <div className="icon_png">
                <Image
                  src="/images/1692432899845.png"
                  alt="Needs Assessment"
                  width={50}
                  height={50}
                />
              </div>
              <div className="details_box">
                <h2>Needs Assessment</h2>
                <p>
                  HWF has been conducting thorough needs assessments to identify
                  specific areas where assistance is required. By directly
                  interacting with individuals and families, we've gained
                  insights into their unique situations and requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="box_same">
              <div className="icon_png">
                <Image
                  src="/images/1692432939612.png"
                  alt="Providing Solutions"
                  width={50}
                  height={50}
                />
              </div>
              <div className="details_box">
                <h2>Providing Practical Solutions</h2>
                <p>
                  Based on the information gathered during our conversations,
                  HWF has been delivering practical solutions to address the
                  immediate and long-term needs of the people we've encountered.
                  This could include providing food, water, clothing, medical
                  support, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="box_same">
              <div className="icon_png">
                <Image
                  src="/images/1692432979429.png"
                  alt="Social Support"
                  width={50}
                  height={50}
                />
              </div>
              <div className="details_box">
                <h2>Social Support and Empowerment</h2>
                <p>
                  Beyond material assistance, HWF has been offering emotional
                  support and empowerment to individuals and families. Our
                  efforts aim to uplift spirits, restore hope, and instill a
                  sense of self-worth among those facing challenging
                  circumstances.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="box_same">
              <div className="icon_png">
                <Image
                  src="/images/1692433032221.png"
                  alt="Advocacy"
                  width={50}
                  height={50}
                />
              </div>
              <div className="details_box">
                <h2>Advocacy and Awareness</h2>
                <p>
                  HWF has been actively advocating for social issues and raising
                  awareness about the challenges faced by marginalized
                  communities. By sharing real-life stories and experiences,
                  we're working to promote a deeper understanding of these
                  issues within society.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="box_same">
              <div className="icon_png">
                <Image
                  src="/images/1692433082439.png"
                  alt="Collaborations"
                  width={50}
                  height={50}
                />
              </div>
              <div className="details_box">
                <h2>Collaborations and Partnerships</h2>
                <p>
                  HWF has been collaborating with other entities, such as local
                  authorities, non-profit organizations, and volunteers, to
                  create a more comprehensive and impactful approach to
                  addressing community needs.
                </p>
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="box_same">
              <div className="icon_png">
                <Image
                  src="/images/1692433124235.png"
                  alt="Future Planning"
                  width={50}
                  height={50}
                />
              </div>
              <div className="details_box">
                <h2>Future Planning</h2>
                <p>
                  As HWF continues to engage with communities, we're likely also
                  working on developing future initiatives, programs, and
                  activities that will further contribute to positive change and
                  sustainable solutions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
