document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const modal = document.getElementById("docModal");
    if (modal && modal.classList.contains("is-open")) {
      closeDocModal();
    }
  }
});

function openDocModal(title, content) {
  document.getElementById("docModalTitle").textContent = title;
  document.getElementById("docModalContent").textContent = content;

  document.getElementById("docModal").classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeDocModal() {
  document.getElementById("docModal").classList.remove("is-open");
  document.body.style.overflow = "";
}

function infoDoc1() {
  openDocModal("Dr. Sridevi Sampathirao - DGO, FMAS | IUI & IVF Specialist",
    "Dr. Sampathirao Sridevi is a highly respected and experienced Obstetrician and Gynaecologist with a proven track record in women’s health and fertility care. With her extensive qualifications in MBBS, DGO, FMAS, and specialized expertise in Intrauterine Insemination (IUI), she offers comprehensive care tailored to each patient’s unique needs. \n\n As the Managing Director of the hospital, Dr. Sridevi is known not only for her clinical excellence but also for her dedication, kindness, and ability to handle even the most challenging and complex medical cases with confidence and compassion. Patients appreciate her empathetic approach, attention to detail, and clear communication, which make them feel supported throughout their treatment journey.");
}


function infoDoc2() {
  openDocModal("Dr. Sivaprasad Bongu - MS Ophthalmology",
    "Dr. Bongu Sivaprasad is a highly trained Consultant Ophthalmologist with a Master of Surgery in Ophthalmology. With extensive experience in both clinical and surgical eye care, Dr. Bongu Sivaprasad is committed to providing high-quality, personalized treatment tailored to each patient’s needs. \n\n As Managing Partner, Dr. Bongu Sivaprasad oversees the overall direction of the practice while maintaining a strong focus on patient care and clinical excellence. Known for a thoughtful and compassionate approach, he ensures that every patient receives attentive, professional, and comprehensive eye care.");
}


function infoDoc3() {
  openDocModal("Dr. Siva Sahith Bongu - MBBS",
    "Dr. Siva Sahith Bongu is a committed and compassionate medical professional holding a Bachelor of Medicine and is currently pursuing his M.S in General Surgery. With a strong foundation in clinical practice and patient care, Dr. Bongu Siva Sahith is dedicated to providing high-quality, evidence-based medical services. They are actively engaged in expanding their clinical expertise and staying updated with the latest advancements in the medical field.  \n\nDr. Sahith is known for their patient-first approach, attention to detail, and sincere commitment to the well-being of every individual under their care.");
}

function infoDoc4() {
  openDocModal(
    "Dr. N. Chaitanya – MD Paediatrics",
    "Dr. N. Chaitanya, MD (Paediatrics), is a dedicated and experienced Consultant Paediatrician specializing in comprehensive care for infants, children, and adolescents.\n\nHaving earned an MD in Paediatrics, Dr. Chaitanya has extensive experience treating childhood illnesses and preventive care."
  );
}

function infoDoc6() {
  openDocModal("Dr. Boddepalli Yogesh - M.Ch Urology",
    "Dr. Boddepalli Yogesh is highly experienced and skilled consultant urologist with a vast background in general surgery and specialized urology treatments. He completed his MBBS at Andhra Medical College, Visakhapatnam, Andhra Pradesh and pursued his MS in general surgery. He further specialized in urology with an M.Ch in Urology at Andhra Medical College. \n\n Dr. Yogesh is highly skilled surgeon with great dedication and precision. He is known for his compassionate approach to patient care, ensuring that each individual receives personalized attention and treatment tailored to their specific needs. His expertise encompasses a wide range of urological conditions, and he is committed to providing the highest standard of care to his patients.");
}
