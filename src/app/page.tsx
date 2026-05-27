import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Background,
  Flex,
} from "@once-ui-system/core";
import { home, about, person, baseURL, effects, opacity, SpacingToken } from "@/resources";
import { Header, Footer } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column
      fillWidth
      horizontal="center"
      style={{
        height: '100vh',
        maxHeight: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
      }}
    >
      {/* Menyuntikkan CSS Paksa agar pembungkus bawaan browser tidak mengizinkan scroll elastis */}
      <style dangerouslySetInnerHTML={{__html: `
        html, body, #__next, main {
          overflow: hidden !important;
          height: 100vh !important;
          max-height: 100vh !important;
          position: fixed !important;
          width: 100vw !important;
          touch-action: none !important;
          -webkit-overflow-scrolling: none !important;
        }
      `}} />

      {/* 1. SEO & Metadata Schema */}
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* 2. Background Efek Visual */}
      <RevealFx fill position="absolute" style={{ zIndex: -1 }}>
        <Background
          mask={{
            x: effects.mask.x,
            y: effects.mask.y,
            radius: effects.mask.radius,
            cursor: effects.mask.cursor,
          }}
          gradient={{
            display: effects.gradient.display,
            opacity: effects.gradient.opacity as opacity,
            x: effects.gradient.x,
            y: effects.gradient.y,
            width: effects.gradient.width,
            height: effects.gradient.height,
            tilt: effects.gradient.tilt,
            colorStart: effects.gradient.colorStart,
            colorEnd: effects.gradient.colorEnd,
          }}
          dots={{
            display: effects.dots.display,
            opacity: effects.dots.opacity as opacity,
            size: effects.dots.size as SpacingToken,
            color: effects.dots.color,
          }}
          grid={{
            display: effects.grid.display,
            opacity: effects.grid.opacity as opacity,
            color: effects.grid.color,
            width: effects.grid.width,
            height: effects.grid.height,
          }}
          lines={{
            display: effects.lines.display,
            opacity: effects.lines.opacity as opacity,
            size: effects.lines.size as SpacingToken,
            thickness: effects.lines.thickness,
            angle: effects.lines.angle,
            color: effects.lines.color,
          }}
        />
      </RevealFx>

      {/* 3. Header Navigasi Atas */}
      <Flex fillWidth minHeight="16" s={{ hide: true }} />
      <Header />

      {/* 4. Konten Utama Portfolio (Tinggi dikunci & dihitung otomatis agar muat bersama Header & Footer) */}
      <Flex 
        zIndex={0} 
        fillWidth 
        paddingX="l" 
        horizontal="center" 
        style={{ 
          height: 'calc(100vh - 140px)', // Memotong space agar memberikan ruang presisi bagi Header & Footer
          maxHeight: 'calc(100vh - 140px)',
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Column maxWidth="m" horizontal="center" style={{ width: '100%', justifyContent: 'center' }}>
          <Column fillWidth horizontal="center" gap="m">
            <Column maxWidth="s" horizontal="center" align="center">
              
              {/* Tag Badge */}
              {home.featured.display && (
                <RevealFx fillWidth horizontal="center" paddingTop="12" paddingBottom="24" paddingLeft="12">
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="12"
                    paddingY="4"
                    onBackground="neutral-strong"
                    textVariant="label-default-s"
                    arrow={false}
                    href={home.featured.href}
                  >
                    <Row paddingY="2">{home.featured.title}</Row>
                  </Badge>
                </RevealFx>
              )}
              
              {/* Headline */}
              <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="12">
                <Heading wrap="balance" variant="display-strong-l">
                  {home.headline}
                </Heading>
              </RevealFx>
              
              {/* Subline */}
              <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="24">
                <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                  {home.subline}
                </Text>
              </RevealFx>
              
              {/* Tombol Profil */}
              <RevealFx paddingTop="8" delay={0.4} horizontal="center" paddingLeft="12">
                <Button
                  id="about"
                  data-border="rounded"
                  href={about.path}
                  variant="secondary"
                  size="m"
                  weight="default"
                  arrowIcon
                >
                  <Row gap="8" vertical="center" paddingRight="4">
                    {about.avatar.display && (
                      <Avatar
                        marginRight="8"
                        style={{ marginLeft: "-0.75rem" }}
                        src={person.avatar}
                        size="m"
                      />
                    )}
                    {about.title}
                  </Row>
                </Button>
              </RevealFx>

            </Column>
          </Column>
        </Column>
      </Flex>

      {/* 5. Footer Bawah */}
      <Footer />
    </Column>
  );
}
