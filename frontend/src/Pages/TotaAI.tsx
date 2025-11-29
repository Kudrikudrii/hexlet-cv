import {
  Container,
  Title,
  Text,
  Card,
  Group,
  Stack,
} from '@mantine/core'

const TotaAi = () => {
  return (
    <Container size="lg">
      <Card
        radius="lg"
        p="xl"
        bg='dark.6'
      >
        <Group justify="center">
          <Stack gap="md" align="center">
            <Text size='xl' c='dimmed'>
              ИИ-помощник
            </Text>  
            <Title order={3} ta="center" c='white'>
              Тота ИИ — агент-ускоритель карьеры
            </Title>
            <Text ta="center" size="lg" c='dimmed'>
              Помогает с резюме, откликами, перепиской с рекрутерами 
              и подготовкой к собеседованиям.
            </Text>
          </Stack>
        </Group>
      </Card>
    </Container>
  );
}

export default TotaAi;