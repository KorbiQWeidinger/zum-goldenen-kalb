import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Londonphotopunk",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVNebYFlDpbcJv-aDW2MjOJwNsydH2LxIoLNLwdKWoomjHbn2Rp7g=w60-h60-p-rp-mo-ba5-br100",
    rating: 5,
    review:
      "I won't forget my evening here in a hurry. I was taken here for my birthday a wonderful experience from start to finish. Very helpful and friendly staff. The steaks were cooked to perfection and the cocktails were heavenly.",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipO8zHCnz4zkl78xNjzaqFQ3n3j6og7uFnBsAM4I=s3840-w3840-h1868",
    url: "https://g.co/kgs/eeUbK9M",
  },
  {
    id: 2,
    name: "Sabrina Feierabend",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVk67KCYj-uBh0g3wIUdVxfQz3-qG8J8KyTzs2M0X-pUt8rwo4=w60-h60-p-rp-mo-ba3-br100",
    rating: 5,
    review: "Great place if you are looking for a good steak in Munich.",

    image:
      "https://lh3.googleusercontent.com/p/AF1QipPHUCu-EMgHzYVxtQ1SKE2AV2DZa3lL2Pa0fbc=s3840-w3840-h1868",
    image2:
      "https://lh3.googleusercontent.com/p/AF1QipOrA2FeMvtVc00MZREyNGNC76qSLmGoZg2mUrg=s3840-w3840-h1868",
    url: "https://g.co/kgs/tKXxSQv",
  },
  {
    id: 3,
    name: "Silvana Pu",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUmwxboWlDMWuBSBlwH_LAx5z-_8eErXPhRfM8Z7I7Qim_o-9Q1uQ=w120-h120-p-rp-mo-br100",
    rating: 5,
    review:
      "Aus Zufall reingeschaut und alles hat uns überzeugt! Super leckeres Steak und bei der Fleisch Auswahl war für jeden was dabei. Der Service war zuvorkommend und sehr höflich! Wir kommen wieder!",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMIrTlk-X08vgXYe9I8OpCdtd5K-UilrLCsfegT=s3840-w3840-h1868",
    url: "https://g.co/kgs/iEvnXU4",
  },
  {
    id: 4,
    name: "David Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 3,
    review: "Good product, but there's room for improvement.",
  },
  {
    id: 5,
    name: "Eva Green",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    review: "Fantastic! This has made such a difference in my daily routine.",
    image: "/placeholder.svg?height=150&width=200",
  },
];

const ReviewCard = ({ review }: { review: (typeof reviews)[number] }) => (
  <Card
    className="w-full h-full bg-gradient-to-br from-black via-gray-950 to-black border border-[#DAA520] shadow-lg dark:border-slate-800 cursor-pointer"
    onClick={() => window.open(review.url, "_blank")}
  >
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <Avatar className="h-10 w-10 mr-4 border border-[#DAA520]">
          <AvatarImage src={review.avatar} alt={review.name} />
          <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-white">{review.name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating
                    ? "text-[#DAA520] fill-[#DAA520]"
                    : "text-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-300 mb-4 text-left h-[5.5em] overflow-hidden">
        {review.review.length > 190
          ? `${review.review.slice(0, 190)}...`
          : review.review}
      </p>
      <div className="flex space-x-2">
        {review.image && (
          <div className="w-1/2 aspect-square overflow-hidden rounded-md shadow-md">
            <img
              src={review.image}
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
    </CardContent>
  </Card>
);

export function ReviewCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3"
            >
              <div className="p-1">
                <ReviewCard review={review} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-[#DAA520] hover:text-black" />
        <CarouselNext className="text-[#DAA520] hover:text-black" />
      </Carousel>
    </div>
  );
}
