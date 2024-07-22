const starRateContainers = document.querySelectorAll(".star-rate");

starRateContainers.forEach((starRateContainer) => {
  const stars = starRateContainer.querySelectorAll("span");

  stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
      stars.forEach((star, index2) => {
        index1 >= index2
          ? star.classList.add("checked")
          : star.classList.remove("checked");
      });
    });
  });
});





const contactForm = document.getElementById("contact-form"),
    contactName =document.getElementById("contact-name"),
    contactNumber =document.getElementById("contact-number"),
    contactEmail =document.getElementById("contact-email"),
    contactProject =document.getElementById("contact-project"),
    contactMessage =document.getElementById("contact-message");


const sendEmail =(e)=>{
    e.preventDefault()

    if(contactName.value === "" || contactEmail.value ==="" || contactProject.value === "" ||contactNumber.value === "" ){
        contactMessage.classList.remove("color-blue");
        contactMessage.classList.add("color-red");

        contactMessage.textContent="Write all the input fields 📝";
    }else{
        emailjs.sendForm('','','' , '')
            .then(()=>{
                contactMessage.classList.add("color-blue");
                contactMessage.textContent="Message sent ✅";
                setTimeout(()=>{
                    contactMessage.textContent="";
                },5000)
            },(error)=>{
                Swal.fire({
                    title: 'Something went wrong',
                    icon: 'warning',
                    showconfirmButton: true,
                    confirmButtonColor: '',
                    cancelButtonColor: '',
                })
            })
            contactName.value ="";
            contactEmail.value ="";
            contactProject.value ="";
    }
}
contactForm.addEventListener("submit",sendEmail);
