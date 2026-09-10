export const siteConfig = {
  phoneDisplay: "+92 309 7708828",
  phoneHref: "tel:+923097708828",
  whatsapp: "https://wa.me/923097708828",
  email: "flex.well.physiotherapist@gmail.com",
  address: "Street 19, J Sector DHA 2 Islamabad, Islamabad, Pakistan",
  googleMaps: {
    location: "https://maps.app.goo.gl/6Ny9CEcrsNRyED5X7?g_st=awb",
    embed: "https://www.google.com/maps?cid=14790288780590020570&output=embed",
  },
  social: {
    instagram: "https://www.instagram.com/flex_well_physiotherapy/",
    facebook: "https://www.facebook.com/share/1LMDmiUfau/",
  },
} as const;

export function getBookingWhatsAppUrl(subject?: string) {
  const message = [
    "Hello Flex Well Physiotherapy Center, I would like to book an appointment.",
    "",
    "Name: ",
    `Preferred service or treatment: ${subject ?? ""}`,
    "Main concern: ",
    "Preferred date and time: ",
    "",
    "Please let me know which appointment slots are available. Thank you.",
  ].join("\n");

  return `${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
