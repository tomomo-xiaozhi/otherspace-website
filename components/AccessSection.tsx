import React from "react";

function AccessSection() {
  return (
    <div>
      <section id="access-lg">
        <div className="grid grid-cols-2">
          <h1 className="text-center font-bold text-4xl">
            Access
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.3988156335345!2d139.7925162861177!3d35.71640905734371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188faa2eb1f42d%3A0x2c313e4e504e433a!2sHOTEL%20K3%20asakusa!5e0!3m2!1sen!2sjp!4v1694323692268!5m2!1sen!2sjp"
            width="600"
            height="450"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section id="access-sm">
        <div className="flex flex-col items-center">
          <h1 className="text-center font-bold text-4xl">
            Access
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
          <div className="">
            <label htmlFor="name" className="text-2xl font-bold">
              Address:
            </label>
            <p className="mt-1 mb-1">
              111-0032 Tokyo-to, Taito-ku Asakusa 2-27-10, Japan
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.3988156335345!2d139.7925162861177!3d35.71640905734371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188faa2eb1f42d%3A0x2c313e4e504e433a!2sHOTEL%20K3%20asakusa!5e0!3m2!1sen!2sjp!4v1694323692268!5m2!1sen!2sjp"
            width="360"
            height="500"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default AccessSection;
