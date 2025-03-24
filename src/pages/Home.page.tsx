import { AppShell, Blockquote, Burger, Button, Card, Group, Image, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import MosaicLogo from '@/images/MosaicLogo.png';

export function HomePage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <AppShell.Header>
        <Image radius="md" h="100%" w="auto" src={MosaicLogo}></Image>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Button fullWidth={true}> Ay bruv</Button>
          <Button fullWidth={true}> Yo bro</Button>
          <Button fullWidth={true}> Yah dude</Button>
          <Button fullWidth={true}> Hey Derrek</Button>
        </Group>
      </AppShell.Navbar>
      <AppShell.Main>
      <Card
      shadow="sm"
      padding="xl"
      component="a"
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={160}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        You&apos;ve been diagnosed with monkey brain!
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Aw too bad try getting diagnosed with something better
      </Text>
    </Card>
      </AppShell.Main>
      <AppShell.Aside p="md">
        <Blockquote color="blue" cite="– A Ghost" mt="md">
          You are soon to be attacked by a cartel of drunk squirrels. Run.
          <Button m={'sm'} variant="gradient">
            Ok
          </Button>
          <Button m={'sm'} variant="gradient">
            Oh no
          </Button>
        </Blockquote>
      </AppShell.Aside>
      <AppShell.Footer p="md">
        <ColorSchemeToggle />
      </AppShell.Footer>
    </AppShell>
  );
}
