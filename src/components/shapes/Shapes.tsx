import "./Shapes.css";

export const CrossLikeShape = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={"cross-shape " + className} />;
};

export const CrossLikeShape2 = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={"cross-shape-2 " + className} />;
};
