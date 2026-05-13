import React from "react";

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02L6.62 10.79z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 2.116.549 4.103 1.508 5.831L.061 23.4a.75.75 0 0 0 .919.919l5.57-1.447A11.955 11.955 0 0 0 12 24c6.626 0 12-5.374 12-12S18.626 0 12 0zm0 22a9.955 9.955 0 0 1-5.077-1.382l-.364-.216-3.771.979.999-3.671-.236-.378A9.952 9.952 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 17.93V18a1 1 0 0 0-2 0v1.93A8.003 8.003 0 0 1 4.07 13H6a1 1 0 0 0 0-2H4.07A8.003 8.003 0 0 1 11 4.07V6a1 1 0 0 0 2 0V4.07A8.003 8.003 0 0 1 19.93 11H18a1 1 0 0 0 0 2h1.93A8.003 8.003 0 0 1 13 19.93z"/>
  </svg>
);

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left column */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
              Visit Us
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-7">
              Haven Eye Ltd &mdash; Ridge, Accra
            </h1>

            <div className="space-y-1.5 text-gray-600 mb-7 leading-relaxed">
              <p>No. 22 Ambassadorial Enclave</p>
              <p>Adjacent the Bank of Ghana building</p>
              <p>
                The Banks Square &mdash; Ridge, Accra{' '}
                <span className="text-[#0084ff] font-medium">GA-052-7763</span>
              </p>
            </div>

            <div className="space-y-4 mb-9">
              <a
                href="tel:0557767766"
                className="flex items-center gap-3 text-[#0084ff] hover:underline text-sm"
              >
                <PhoneIcon />
                <span>0557 767 766</span>
              </a>
              <a
                href="mailto:info@haveneyeltd.com"
                className="flex items-center gap-3 text-[#0084ff] hover:underline text-sm"
              >
                <EmailIcon />
                <span>info@haveneyeltd.com</span>
              </a>
              <a
                href="https://wa.me/233557767766"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#0084ff] hover:underline text-sm"
              >
                <WhatsAppIcon />
                <span>0557 767 766</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=North+Ridge+Accra+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0066cc] text-white text-sm px-5 py-2.5 rounded hover:bg-[#0084ff] transition"
              >
                Get directions
              </a>
              <a
                href="tel:0557767766"
                className="bg-[#0066cc] text-white text-sm px-5 py-2.5 rounded hover:bg-[#0084ff] transition"
              >
                Call
              </a>
              <a
                href="https://haveneye.simplybook.me/v2/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0066cc] text-white text-sm px-5 py-2.5 rounded hover:bg-[#0084ff] transition"
              >
                Book appointment
              </a>
            </div>

            {/* For Enquiries */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">For Enquiries:</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  Managing Director:{' '}
                  <strong>
                    <a href="tel:0557767766" className="hover:underline">0557 767 766</a>
                  </strong>
                </p>
                <p>
                  Main office:{' '}
                  <strong>
                    <a href="tel:0557767766" className="hover:underline">0557 767 766</a>
                  </strong>
                </p>
                <p className="flex items-center gap-2">
                  <EmailIcon />
                  Email Address:{' '}
                  <a href="mailto:info@haveneyeltd.com" className="text-[#0084ff] hover:underline ml-1">
                    info@haveneyeltd.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <GlobeIcon />
                  Website:{' '}
                  <a
                    href="https://www.haven-eye.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0084ff] hover:underline ml-1"
                  >
                    www.haven-eye.com
                  </a>
                </p>
              </div>

              {/* Social media */}
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/haveneyeltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:opacity-90 transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/18fgviwgh7/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] text-white hover:opacity-90 transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@haveneyeltd?_r=1&_t=ZS-96Bm35hu9aS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:opacity-90 transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12.4 2.95a4.53 4.53 0 0 1 2.88 1.12 4.5 4.5 0 0 1 1.16 3h1.41a5.95 5.95 0 0 0-1.6-4.4A5.94 5.94 0 0 0 12.4 1V2.95z"/>
                    <path d="M9.56 22.5c-1.91 0-3.45-1.55-3.45-3.47 0-1.79 1.26-3.28 2.94-3.44v2.57a1.02 1.02 0 0 0 .97 1.05c.5.02.96-.36.99-.86V9.18a4.48 4.48 0 0 1-2.45-.77v3.7c0 2.58 1.95 4.7 4.52 4.7.19 0 .38-.01.56-.04v2.95a7.1 7.1 0 0 1-3.08.2z"/>
                  </svg>
                </a>
              </div>

              {/* Instagram QR Code */}
              <div className="mt-8">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Scan to follow us on Instagram</p>
                <a
                  href="https://www.instagram.com/haveneyeltd?utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/instagram-qr.png"
                    alt="Scan to follow @haveneyeltd on Instagram"
                    className="w-40 h-40 rounded-xl object-cover hover:opacity-90 transition"
                  />
                </a>
                <p className="mt-2 text-xs text-gray-500">@haveneyeltd</p>
              </div>
            </div>
          </div>

          {/* Right column: Map */}
          <div className="w-full h-100 lg:h-full lg:min-h-130 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Haven Eye Ltd location map"
              src="https://maps.google.com/maps?q=North+Ridge+Accra+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;