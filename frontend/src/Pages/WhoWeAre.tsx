import { Stack, Badge, Grid, Group, Container, Avatar, Text, Card } from '@mantine/core';

const WhoWeAre: React.FC = () => {
  const features: string[] = [
  "Составлять резюме",
  "Откликаться", 
  "Искать вакансии и стажировки",
  "Переписываться с рекрутерами",
  "Писать сопроводительные",
  "Готовить интервью", 
  "Получать коммерческий опыт"
]

  return (
    <Container size="lg" py="xs">
      <Card radius="lg" p="xl" bg='dark.6'>
        <Grid>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap={0}>
              <Text fz="h1" fw="bold" c="white">
                Привет, мы Хекслет
              </Text>
              <Text c="white" size="lg">
                экосистема для старта и развития в IT:
              </Text>
            </Stack>

            <Group mt='lg' gap="xs" wrap="wrap">
              {features.map((feature: string, index: number) => (
                <Badge key={index} color='blue.6' size='lg' tt='none'>
                  <Text size='xs' c='white' fw='bold'>
                    {feature}
                  </Text>
                </Badge>
              ))}
            </Group>    

          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Group justify='center' align="center">
              <Avatar
                src="../public/HexletLogoHome.svg"
                size={250}
                radius="50%"
                alt="Логотип Хекслет"
              />
            </Group>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
}

export default WhoWeAre