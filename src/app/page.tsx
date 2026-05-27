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
        touchAction: 'none', // TRIK UTAMA: Mematikan total semua interaksi scroll/goyang di HP & Trackpad
      }}
    >
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

      {/* 4. Konten Utama Portfolio */}
      <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1} style={{ alignItems: 'center' }}>
        <Column maxWidth="m" paddingY="12" horizontal="center" style={{ justifyContent: 'center', width: '100%' }}>
          <Column fillWidth horizontal="center" gap="m">
            <Column maxWidth="s" horizontal="center" align="center">
              
              {/* Tag Badge */}
              {home.featured.display && (
                <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="32" paddingLeft="12">
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
              <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
                <Heading wrap="balance" variant="display-strong-l">
                  {home.headline}
                </Heading>
              </RevealFx>
              
              {/* Subline */}
              <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
                <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                  {home.subline}
                </Text>
              </RevealFx>
              
              {/* Tombol Profil */}
              <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
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
