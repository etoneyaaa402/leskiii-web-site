import PageTransition from "@/components/blocks/PageTransition";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}