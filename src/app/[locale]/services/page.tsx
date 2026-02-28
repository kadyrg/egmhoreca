import { cn } from "@/shared/lib/css";
import { Button } from "@/shared/ui/kit/button";
import { Card, CardContent } from "@/shared/ui/kit/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared/ui/kit/carousel";
import { Field, FieldGroup, FieldLabel } from "@/shared/ui/kit/field";
import { Input } from "@/shared/ui/kit/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/shared/ui/kit/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/kit/select";
import { Separator } from "@/shared/ui/kit/separator";
import { Textarea } from "@/shared/ui/kit/textarea";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyMuted,
  TypographyP,
} from "@/shared/ui/kit/typography";
import { Home } from "lucide-react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Home");

  return {
    title: t("meta-title"),
    description: t("meta-description"),
    openGraph: {
      title: t("meta-title"),
      description: t("meta-description"),
    },
  };
}

const data = [
  {
    id: 1,
    title: "Consultanta Personalizata",
    icon: Home,
    banner: "/banner1.jpg",
    content: {
      title: "Consultanta Personalizata",
      desciption:
        "Oferim consultanta detaliata pentru a identifica cele mai potrivite solutii pentru afacerea ta. Procesul nostru include:",
      listItems: [
        "Analiza si stabilirea fluxului tehnologic pentru eficienta maxima.",
        "Dimensionarea corecta a investitiei in functie de locatie si specificul afacerii.",
        "Plan de achizitie in etape, pentru optimizarea bugetului si cresterea treptata a capacitatii operationale.",
      ],
    },
  },
  {
    id: 2,
    title: "Proiectare Profesionala",
    icon: Home,
    banner: "/banner1.jpg",
    content: {
      title: "Consultanta Personalizata",
      desciption:
        "Oferim consultanta detaliata pentru a identifica cele mai potrivite solutii pentru afacerea ta. Procesul nostru include:",
      listItems: [
        "Analiza si stabilirea fluxului tehnologic pentru eficienta maxima.",
        "Dimensionarea corecta a investitiei in functie de locatie si specificul afacerii.",
        "Plan de achizitie in etape, pentru optimizarea bugetului si cresterea treptata a capacitatii operationale.",
      ],
    },
  },
  {
    id: 3,
    title: "Testarea Echipamentelor",
    icon: Home,
    banner: "/banner1.jpg",
    content: {
      title: "Consultanta Personalizata",
      desciption:
        "Oferim consultanta detaliata pentru a identifica cele mai potrivite solutii pentru afacerea ta. Procesul nostru include:",
      listItems: [
        "Analiza si stabilirea fluxului tehnologic pentru eficienta maxima.",
        "Dimensionarea corecta a investitiei in functie de locatie si specificul afacerii.",
        "Plan de achizitie in etape, pentru optimizarea bugetului si cresterea treptata a capacitatii operationale.",
      ],
    },
  },
  {
    id: 4,
    title: "Service si mentenanta",
    icon: Home,
    banner: "/banner1.jpg",
    content: {
      title: "Consultanta Personalizata",
      desciption:
        "Oferim consultanta detaliata pentru a identifica cele mai potrivite solutii pentru afacerea ta. Procesul nostru include:",
      listItems: [
        "Analiza si stabilirea fluxului tehnologic pentru eficienta maxima.",
        "Dimensionarea corecta a investitiei in functie de locatie si specificul afacerii.",
        "Plan de achizitie in etape, pentru optimizarea bugetului si cresterea treptata a capacitatii operationale.",
      ],
    },
  },
];

export default async function Services() {
  return (
    <>
      <div className="relative z-20">
        <section className="relative text-background bg-background">
          <Image
            src={"/banner1.jpg"}
            alt={""}
            width={1920}
            height={1080}
            className="w-full h-170 object-cover brightness-40"
          />
          <div className="absolute top-3/7 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-3 sm:gap-4 md:gap-5 xl:gap-6 max-w-2xl">
            <div className="space-y-1 lg:space-y-2 xl:space-y-3">
              <h2 className="text-3xl sm:text-4xl xl:text-5xl text-balance font-semibold text-center">
                Our services
              </h2>
              <h4 className="text-center leading-6 text-balance lg:text-lg md:leading-7">
                La Conti Grup, ne dedicam furnizarii de solutii complete pentru
                echiparea si intretinerea afacerilor din domeniul HORECA. De la
                consultanta specializata si vanzare de echipamente profesionale,
                pana la servicii de mentenanta si reparatii, ne asiguram ca
                afacerea ta functioneaza fara intreruperi.
              </h4>
            </div>
            <Button size={"lg"}>Learn more</Button>
          </div>
        </section>
        <div className="bg-background">
          <section className="space-y-3 py-2 max-w-[90rem] mx-auto">
            <Carousel
              opts={{
                align: "start",
                dragFree: true,
              }}
              className="py-2"
            >
              <CarouselContent className="ml-4 mr-6">
                {data.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/1 sm:basis-1/2 lg:basis-1/4 pl-1"
                  >
                    <Button
                      variant={"secondary"}
                      className="w-full rounded-full h-12 text-base [&_svg:not([class*='size-'])]:size-5 hover:bg-zinc-200"
                    >
                      <item.icon />
                      {item.title}
                    </Button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Separator className="w-full !h-0.1 bg-linear-to-r from-background via-border to-background" />
            {data.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-2 md:items-stretch gap-4 p-4"
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-3xl aspect-[16/10] md:aspect-auto md:h-full",
                    item.id % 2 === 1 ? "md:order-1" : "md:order-2",
                  )}
                >
                  <Image
                    className="object-cover"
                    src={item.banner}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    alt={""}
                  />
                </div>
                <div
                  className={cn(
                    "bg-accent rounded-3xl py-8 px-10 flex flex-col justify-center items-start",
                    item.id % 2 === 1 ? "md:order-2" : "md:order-1",
                  )}
                >
                  <TypographyH3>{item.content.title}</TypographyH3>
                  <TypographyP>{item.content.desciption}</TypographyP>
                  <ul className="my-6 ml-6 list-disc">
                    {item.content.listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <Button size={"lg"}>Contact</Button>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="max-w-[90rem] mx-auto bg-foreground/70 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:py-16 my-4 text-background space-y-2 md:space-y-4 lg:space-y-6">
          <div className="flex flex-col gap-2 md:gap-3">
            <TypographyH1 className="text-center">
              De ce sa ne alegi?
            </TypographyH1>
            <TypographyP className="text-center max-w-lg mx-auto">
              Oferim servicii de calitate, adaptate fiecarui client, pentru ca
              afacerea ta sa prospere fara intreruperi.
            </TypographyP>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex flex-col  gap-3 p-4 items-center">
              <Home size={60} />
              <TypographyH3 className="text-center">
                Expertiza in domeniu
              </TypographyH3>
              <TypographyMuted className="text-muted text-center">
                Cu peste 10 ani de activitate, echipa noastra cunoaste in
                profunzime provocarile din HORECA si ofera solutii testate si
                eficiente pentru orice tip de afacere.
              </TypographyMuted>
            </div>
            <div className="flex flex-col  gap-3 p-4 items-center">
              <Home size={60} />
              <TypographyH3 className="text-center">
                Expertiza in domeniu
              </TypographyH3>
              <TypographyMuted className="text-muted text-center">
                Cu peste 10 ani de activitate, echipa noastra cunoaste in
                profunzime provocarile din HORECA si ofera solutii testate si
                eficiente pentru orice tip de afacere.
              </TypographyMuted>
            </div>
            <div className="flex flex-col  gap-3 p-4 items-center">
              <Home size={60} />
              <TypographyH3 className="text-center">
                Expertiza in domeniu
              </TypographyH3>
              <TypographyMuted className="text-muted text-center">
                Cu peste 10 ani de activitate, echipa noastra cunoaste in
                profunzime provocarile din HORECA si ofera solutii testate si
                eficiente pentru orice tip de afacere.
              </TypographyMuted>
            </div>
            <div className="flex flex-col  gap-3 p-4 items-center">
              <Home size={60} />
              <TypographyH3 className="text-center">
                Expertiza in domeniu
              </TypographyH3>
              <TypographyMuted className="text-muted text-center">
                Cu peste 10 ani de activitate, echipa noastra cunoaste in
                profunzime provocarile din HORECA si ofera solutii testate si
                eficiente pentru orice tip de afacere.
              </TypographyMuted>
            </div>
            <div className="flex flex-col  gap-3 p-4 items-center">
              <Home size={60} />
              <TypographyH3 className="text-center">
                Expertiza in domeniu
              </TypographyH3>
              <TypographyMuted className="text-muted text-center">
                Cu peste 10 ani de activitate, echipa noastra cunoaste in
                profunzime provocarile din HORECA si ofera solutii testate si
                eficiente pentru orice tip de afacere.
              </TypographyMuted>
            </div>
            <div className="flex flex-col  gap-3 p-4 items-center">
              <Home size={60} />
              <TypographyH3 className="text-center">
                Expertiza in domeniu
              </TypographyH3>
              <TypographyMuted className="text-muted text-center">
                Cu peste 10 ani de activitate, echipa noastra cunoaste in
                profunzime provocarile din HORECA si ofera solutii testate si
                eficiente pentru orice tip de afacere.
              </TypographyMuted>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <Button size={"lg"}>Afla mai mult</Button>
          </div>
        </div>
        <section className="bg-background p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            <Card>
              <CardContent>
                <TypographyH2 className="text-center">Contact</TypographyH2>
                <TypographyP className="text-center">
                  Completeaza formularul si te contactam rapid
                </TypographyP>
                <form className="px-4 py-8">
                  <FieldGroup>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="firstName">First name</FieldLabel>
                        <Input
                          id="firstName"
                          placeholder="Enter first name"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="lastName">Last name</FieldLabel>
                        <Input
                          id="lastName"
                          placeholder="Enter last name"
                          required
                        />
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel htmlFor="firstName">Email</FieldLabel>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter email"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="lastName">Phone number</FieldLabel>
                        <InputGroup>
                          <InputGroupAddon>
                            <InputGroupText>+40</InputGroupText>
                          </InputGroupAddon>
                          <InputGroupInput className="!pl-2" />
                        </InputGroup>
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="password">
                        Solutia dorita *
                      </FieldLabel>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Solutia dorita" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="password">
                        Solutia dorita *
                      </FieldLabel>
                      <Textarea placeholder="Description" className="h-40" />
                    </Field>
                    <Field>
                      <Button type="submit" size={"lg"}>
                        Trimite
                      </Button>
                    </Field>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Image
        src={"/banner1.jpg"}
        width={1920}
        height={1080}
        className="fixed top-0 z-10 w-full h-full object-cover"
        alt={""}
      />
    </>
  );
}
