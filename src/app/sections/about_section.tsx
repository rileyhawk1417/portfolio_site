import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";
const instagramLink = "https://www.instagram.com/seanrileyhawkins_/";
const twitterLink = "https://twitter.com/SeanRiley1417";
const githubLink = "https://github.com/rileyhawk1417";
const AboutSection = () => {
  return (
    <div className="w-96">
      Hi there am Sean and am also a Software Engineer. I like to build things
      both small & big, am a fan of open source and meeting new people to learn
      skills. Using nextjs for my web stacks & learning React Native for mobile
      development, am also a contributer at AppFlowy. When am not coding I like
      to make 3d art work, which I post here on my Instagram
      <div className="flex flex-row sm:flex-col">
        <Link href={instagramLink} className="flex flex-row">
          <span>Instagram</span>
          <Instagram />
        </Link>
        <Link href={twitterLink} className="flex flex-row">
          <span>Twitter</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M1.8247 2.61328L9.63356 13.0859L1.77539 21.6005H3.54395L10.4238 14.1458L15.9825 21.6005H22.0009L13.7527 10.5389L21.067 2.61328H19.2985L12.9625 9.47893L7.84317 2.61328H1.8247ZM4.4255 3.91992H7.1904L19.3997 20.2937H16.6348L4.4255 3.91992Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
        <Link href={githubLink} className="flex flex-row">
          <span>Github</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_1203_26692)">
              <path
                d="M8.02742 19.3677C8.02742 19.4631 7.91613 19.5394 7.77581 19.5394C7.61613 19.5537 7.50484 19.4774 7.50484 19.3677C7.50484 19.2724 7.61613 19.1961 7.75645 19.1961C7.90161 19.1818 8.02742 19.258 8.02742 19.3677ZM6.52258 19.1531C6.48871 19.2485 6.58548 19.3582 6.73065 19.3868C6.85645 19.4345 7.00161 19.3868 7.03064 19.2914C7.05968 19.1961 6.96774 19.0864 6.82258 19.0435C6.69677 19.0101 6.55645 19.0578 6.52258 19.1531ZM8.66129 19.0721C8.52097 19.1055 8.42419 19.1961 8.43871 19.3057C8.45323 19.4011 8.57903 19.4631 8.72419 19.4297C8.86452 19.3963 8.96129 19.3057 8.94677 19.2104C8.93226 19.1198 8.80161 19.0578 8.66129 19.0721ZM11.8452 0.800781C5.13387 0.800781 0 5.82158 0 12.4349C0 17.7227 3.37742 22.2476 8.20161 23.8402C8.82097 23.9498 9.03871 23.5732 9.03871 23.2632C9.03871 22.9676 9.02419 21.3369 9.02419 20.3356C9.02419 20.3356 5.6371 21.0508 4.92581 18.9147C4.92581 18.9147 4.37419 17.5272 3.58065 17.1696C3.58065 17.1696 2.47258 16.421 3.65806 16.4353C3.65806 16.4353 4.8629 16.5307 5.52581 17.6655C6.58548 19.506 8.36129 18.9767 9.05323 18.662C9.16452 17.8991 9.47903 17.3699 9.82742 17.0552C7.12258 16.7596 4.39355 16.3734 4.39355 11.7865C4.39355 10.4752 4.76129 9.81723 5.53548 8.97805C5.40968 8.66812 4.99839 7.39028 5.66129 5.74052C6.67258 5.43059 9 7.0279 9 7.0279C9.96774 6.76089 11.0081 6.62262 12.0387 6.62262C13.0694 6.62262 14.1097 6.76089 15.0774 7.0279C15.0774 7.0279 17.4048 5.42583 18.4161 5.74052C19.079 7.39505 18.6677 8.66812 18.5419 8.97805C19.3161 9.822 19.7903 10.48 19.7903 11.7865C19.7903 16.3877 16.9403 16.7548 14.2355 17.0552C14.6806 17.4319 15.0581 18.1471 15.0581 19.2676C15.0581 20.8744 15.0435 22.8627 15.0435 23.2537C15.0435 23.5636 15.2661 23.9403 15.8806 23.8306C20.7194 22.2476 24 17.7227 24 12.4349C24 5.82158 18.5565 0.800781 11.8452 0.800781ZM4.70323 17.2459C4.64032 17.2936 4.65484 17.4033 4.7371 17.4939C4.81452 17.5701 4.92581 17.6035 4.98871 17.5415C5.05161 17.4939 5.0371 17.3842 4.95484 17.2936C4.87742 17.2173 4.76613 17.1839 4.70323 17.2459ZM4.18064 16.8597C4.14677 16.9217 4.19516 16.998 4.29194 17.0457C4.36935 17.0933 4.46613 17.079 4.5 17.0123C4.53387 16.9503 4.48548 16.874 4.38871 16.8263C4.29193 16.7977 4.21452 16.812 4.18064 16.8597ZM5.74839 18.5571C5.67097 18.6191 5.7 18.7622 5.81129 18.8528C5.92258 18.9624 6.0629 18.9767 6.12581 18.9004C6.18871 18.8385 6.15968 18.6954 6.0629 18.6048C5.95645 18.4952 5.81129 18.4808 5.74839 18.5571ZM5.19677 17.8562C5.11936 17.9039 5.11936 18.0279 5.19677 18.1375C5.27419 18.2472 5.40484 18.2949 5.46774 18.2472C5.54516 18.1852 5.54516 18.0613 5.46774 17.9516C5.4 17.8419 5.27419 17.7942 5.19677 17.8562Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1203_26692">
                <rect width="24" height="24" fill="currentColor"></rect>
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default AboutSection;
