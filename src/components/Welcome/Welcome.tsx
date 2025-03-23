import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Kill
        </Text>        
        <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'red' }}>
          Shitter
        </Text>
      </Title>
      {/* Text Content */}
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Will this help me{' '} 
        <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'red' }}>
        Mantine
        </Text> my sanity?
      </Text>
    </>
  );
}
