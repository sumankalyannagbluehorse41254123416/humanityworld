"use client";

export default function AnimalCare() {
  return (
    <section id="animal_care">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="work_heading animal_heading text-center education_mt">
              <h2>ANIMAL CARE</h2>
            </div>

            <div className="care">
              <p>
                A profound affection for animals resonates with the majority of
                us. Whether it's offering care, providing sustenance, or lending
                a helping hand, our interactions with animals reflect our shared
                empathy. Stray animals populate the streets of Mumbai and cities
                all across the nation, each with a life that requires
                sustenance, shelter, and attention—similar to our own needs.
              </p>
            </div>

            <div className="care_left_img">
              <p>
                At HWF, we have already taken substantial steps to assist these
                stray animals, ensuring they receive nourishment and medical
                care. Furthermore, we are forging partnerships with various
                Animal Shelter homes to secure appropriate residences for
                animals in genuine need. The heart of our mission extends to
                facilitating adoptions for strays nationwide, granting a second
                chance at a loving home.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="care_right_img">
              <img
                src="/images/1696318818970.jpg"
                alt="Animal Care"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="care_right_img">
              <img
                src="/images/1695888115515.jpg"
                alt="Animal Care Support"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="care_left_img ntm">
              <p>
                As part of our commitment, we are assembling a robust team of
                volunteers across Maharashtra. These dedicated individuals will
                actively engage in the entire process, from reporting to
                hands-on involvement. Through their efforts and your
                collaboration, we envision a brighter future for countless
                animals in need. Join us in our mission to make every day a
                better one for these silent companions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
