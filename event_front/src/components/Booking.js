import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import QRCode from 'qrcode';
import img from '../images/paytm.png'

export const Booking = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:3046/api/v1/users/getbooking", {
          headers: { Authorization: Cookies.get("accessToken") },
        })
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);

  console.log(data)

  // For pdf download button 

  const handleDownload = async (event) => {
    const doc = new jsPDF();

    // === Header ===
    doc.setFillColor(75, 0, 130); // Royal Purple
    doc.rect(0, 10, 210, 15, 'F'); // full-width header bar
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.text("Harmony Event Management - E-Ticket", 105, 20, null, null, "center");


    // === Generate QR Code ===
    const qrText = `Ticket ID: ${event._id}`;
    const qrDataUrl = await QRCode.toDataURL(qrText);
    doc.addImage(qrDataUrl, 'PNG', 20, 35, 60, 60); // Left QR code

    // === Success Message Below QR ===
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(0, 150, 0); // green
    doc.text("Booking Successful !", 28, 97);

    // === Event Details on Right Side ===
    let x = 90;
    let y = 45;

    const writeRow = (label, value) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor('black');
      doc.text(label, x, y);
      doc.setFont("helvetica", "bold");
      doc.setTextColor('black');
      doc.text(value, x + 40, y);
      y += 10;
    };

    writeRow("Title:", event.title.toUpperCase());
    writeRow("Date & Time:", `${event.e_date}, ${event.e_time}`);
    writeRow("Location:", event.location);
    writeRow("Booking Date:", new Date(event.createdAt).toLocaleDateString());
    writeRow("Price:", `Rs. ${event.price}`);
    writeRow("Ticket ID:", event._id);

    // === Rules & Regulations Box ===
    let boxStartY = y + 10;
    const ruleLines = [
      "• Carry a valid government-issued ID.",
      "• Tickets are non-refundable once booked.",
      "• Re-entry is not permitted after exit.",
      "• Outside food, drinks, or illegal items are banned.",
      "• Misbehavior may lead to removal without refund.",
    ];
    const ruleBoxHeight = 10 + ruleLines.length * 6 + 5;

    doc.setFillColor(249, 249, 249); // Light gray background
    doc.roundedRect(15, boxStartY, 180, ruleBoxHeight, 3, 3, 'F');

    // Rules title
    let ruleY = boxStartY + 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.setTextColor(0, 102, 204); // Blue
    doc.text("Rules & Regulations :", 20, ruleY);

    // Rules content
    ruleY += 8;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(11);
    doc.setTextColor(50);
    ruleLines.forEach((line) => {
      doc.text(line, 23, ruleY);
      ruleY += 6;
    });


    // === Disclaimer Box ===
    let disclaimerStartY = boxStartY + ruleBoxHeight + 8;
    const disclaimerLines = [
      "• Organizer is not responsible for loss, injury, or theft.",
      "• Schedule is subject to change without prior notice.",
      "• Unauthorized photography/recording is prohibited.",
      "• By entering, you allow media usage of your image.",
    ];
    const disclaimerBoxHeight = 10 + disclaimerLines.length * 6 + 5;

    doc.setFillColor(249, 249, 249); // Same light gray
    doc.roundedRect(15, disclaimerStartY, 180, disclaimerBoxHeight, 3, 3, 'F');

    // Disclaimer title
    let discY = disclaimerStartY + 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.setTextColor(204, 0, 0); // Red
    doc.text("Disclaimer :", 20, discY);

    // Disclaimer content
    discY += 8;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(11);
    doc.setTextColor(80);
    disclaimerLines.forEach((line) => {
      doc.text(line, 23, discY);
      discY += 6;
    });

    y = discY + 5; // Update Y for footer



    // === Contact & Follow Us Box ===
    let contactStartY = disclaimerStartY + disclaimerBoxHeight + 8;
    const contactLines = [
      "For any queries or support, contact us at: ",
      "• Phone: +91 98765 43210",
      "• Instagram: @HarmonyEvents",

    ];
    const contactBoxHeight = 10 + contactLines.length * 6 + 5;

    doc.setFillColor(249, 249, 249); // Light gray background
    doc.roundedRect(15, contactStartY, 180, contactBoxHeight, 3, 3, 'F');

    // Title
    let contactY = contactStartY + 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.setTextColor(0, 102, 204); // Blue for contact
    doc.text("Need Help ?? ", 20, contactY);

    // Content
    contactY += 8;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(11);
    doc.setTextColor(50);
    contactLines.forEach((line) => {
      doc.text(line, 23, contactY);
      contactY += 6;
    });

    // Update Y position for next block or footer
    y = contactY + 10;

    // === Slogan ===
    doc.setFont("helvetica", "bolditalic");
    doc.setFontSize(13);
    doc.setTextColor(75, 0, 130); // Purple tone for elegance
    doc.text('"Where Moments Become Memories..."', 105, y, null, null, 'center');

    y += 10; // update Y if you’re placing something after



    // === Footer ===
    doc.setDrawColor(220);
    doc.setFillColor(240, 240, 240);
    doc.rect(10, 270, 190, 15, 'F');
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text("Thank you for booking with Harmony Event Management \u00AE", 105, 280, null, null, "center");

    // === Save PDF ===
    doc.save(`${event.title} Ticket.pdf`);
  };



  return (
    <div className="grid lg:grid-cols-2 p-4 md:p-8 gap-10">
      {data?.map((ee, i) => {
        const e = ee.event_id;
        return (
          <div
            key={i}
            className="grid md:grid-cols-3 gap-10 items-center p-4 rounded bg-[#f3f3f1]"
          >

            <div>
              <img className="p-4 w-full md:h-[200px] bg-white" src={img} />
              <div className="text-center">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 mt-2 rounded"
                  onClick={() => handleDownload(e)} // ✅ NEW: Trigger PDF download
                >
                  Download Ticket
                </button>

              </div>
            </div>
            <div className="grid gap-2 overflow-hidden">
              <div className="font-medium">
                <div className="text-lg">Ticket ID:</div>
                <div className="text-md text-blue-700">{e._id}</div>
              </div>

              <div className="font-medium">
                <div className="text-lg">Location:</div>
                <div className="text-md text-blue-700 capitalize">{e.location}</div>
              </div>
              <div className="font-medium">
                <div className="text-lg">Price:</div>
                <div className="text-md text-blue-700 uppercase">₹ {e.price}</div>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">
                <div className="text-lg">Date & Time:</div>
                <div className="text-md text-blue-700">{e.e_date}, {e.e_time}</div>
              </div>

              <div className="font-medium">
                <div className="text-lg">Booking Date:</div>
                <div className="text-md text-blue-700 uppercase">{new Date(e.createdAt).toLocaleDateString()}</div>
              </div>
              <div className="font-medium">
                <div className="text-lg">Title:</div>
                <div className="text-md text-blue-700 uppercase">{e.title}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
