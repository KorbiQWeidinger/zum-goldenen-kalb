import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { t } from "i18next";
import { DividerWithLogo } from "./BlockHeader";
import Spacer from "./ui/Spacer";
import Marquee from "@/components/ui/marquee";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { TABLET } from "../constants/breakpoints";

type Review = {
  id: number;
  name: string;
  avatar: string;
  rating?: number;
  review: string;
  image1?: string;
  image2?: string;
  url: string;
};

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card
      className="max-w-[40vh] max-h-[40vh] min-w-[40vh] min-h-[40vh] aspect-square bg-gradient-to-br from-black via-gray-950 to-black border border-[#DAA520] shadow-lg dark:border-slate-800 cursor-pointer"
      onClick={() => window.open(review.url, "_blank")}
    >
      <CardContent className="p-6 flex flex-col justify-between h-full">
        {review.rating ? (
          <>
            <div className="flex-grow">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4 rounded-none">
                  <AvatarImage
                    src={review.avatar}
                    alt={review.name}
                    className="rounded-none"
                  />
                  <AvatarFallback className="rounded-none">
                    {review.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-white text-left">
                    {review.name}
                  </h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < (review.rating ?? 5)
                            ? "text-[#DAA520] fill-[#DAA520]"
                            : "text-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4 text-left overflow-hidden line-clamp-3">
                {review.review}
              </p>
            </div>
            <div className="flex space-x-2">
              {review.image1 && (
                <div className="w-1/2 aspect-square overflow-hidden rounded-md shadow-md">
                  <img
                    src={review.image1}
                    alt="Review"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {review.image2 && (
                <div className="w-1/2 aspect-square overflow-hidden rounded-md shadow-md">
                  <img
                    src={review.image2}
                    alt="Review"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <DividerWithLogo />
            <Spacer size="lg" />
            <p className="text-xl font-semibold text-center text-white">
              {t("home.reviews_link")}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export function ReviewCarousel() {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Londonphotopunk",
      avatar: "/reviews/avatar-london.png",
      rating: 5,
      review: t("reviews.london"),
      image1: "/reviews/image1-london.png",
      url: "https://g.co/kgs/eeUbK9M",
    },
    {
      id: 2,
      name: "Sabrina Feierabend",
      avatar: "/reviews/avatar-sabri.png",
      rating: 5,
      review: t("reviews.sabri"),
      image1: "/reviews/image1-sabri.png",
      image2: "/reviews/image2-sabri.png",
      url: "https://g.co/kgs/tKXxSQv",
    },
    {
      id: 3,
      name: "Silvana Pu",
      avatar: "/reviews/avatar-silvana.png",
      rating: 5,
      review: t("reviews.silvana"),
      image1: "/reviews/image1-silvana.png",
      url: "https://g.co/kgs/iEvnXU4",
    },
    {
      id: 4,
      name: "Lucas",
      avatar: "/reviews/avatar-lucas.png",
      rating: 5,
      review: t("reviews.lucas"),
      image1: "/reviews/image1-lucas.png",
      url: "https://maps.app.goo.gl/2Vw6WpFzfCoc2tve9",
    },
    {
      id: 5,
      name: "Julian Frey",
      avatar: "/reviews/avatar-juli.png",
      rating: 5,
      review: t("reviews.juli"),
      image1: "/reviews/image1-juli.png",
      url: "https://maps.app.goo.gl/eRJYGNEtp9znbqdT6",
    },
    {
      id: 6,
      name: "",
      avatar: "",
      review: t("home.reviews_link"),
      url: "https://g.co/kgs/pP5eYfX",
    },
  ];

  const isTablet = useBreakpoint(TABLET);

  return (
    <div className="w-full mx-auto py-8 relative">
      {isTablet && (
        <>
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black via-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black to-transparent z-10 pointer-events-none"></div>
        </>
      )}
      <Marquee
        className="w-full max-h-[100vh] md:max-h-[60vh] flex justify-center items-center"
        repeat={6}
        vertical={isTablet}
      >
        {reviews.map((review) => (
          <div key={review.id} className="p-1">
            <ReviewCard review={review} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
