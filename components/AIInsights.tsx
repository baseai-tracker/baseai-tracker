import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { mockInsights } from "@/lib/mockData";

export function AIInsights() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-4">AI Insights</h2>
      <Carousel>
        <CarouselContent>
          {mockInsights.map((insight, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <Card className="card-neumorphic">
                <CardContent>
                  <h3 className="font-bold">{insight.title}</h3>
                  <p>{insight.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
