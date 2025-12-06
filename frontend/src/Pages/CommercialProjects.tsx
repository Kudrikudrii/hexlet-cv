import { Container, Card, Badge, Text, Group, Title, Grid, List, ThemeIcon } from '@mantine/core';

const CommercialProjects = () => {

  return (
    <Container size="lg" py="xs">
      <Card radius="lg" p="md" bg='dark.6'>
        <Group justify="center" mb="xl">
          <Badge color='gray.7' size='lg' tt='none'>
            <Text size='xs' c='white'>
              Коммерческие проекты
            </Text>
          </Badge>
            <Title order={1} c='white' fw='bold'>
              Коммерческие проекты, в которых вы примете участие
            </Title>
            <Text size='md' c='white' maw={600} ta="center">
              Практика в реальных продуктах Хекслета коммит в GitHub, опыт командной разработки и результаты в портфолио
            </Text>
        </Group>
        <Grid mb="md">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card radius="lg" bg='dark.5' h="100%">
              <Group gap='sm'>
                <ThemeIcon variant='transparent' color="blue.6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"  
                    viewBox="0 0 22 22" 
                    strokeWidth={2}
                    stroke="currentColor"
                    fill='none'
                  >
                    <path 
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" 
                    />
                  </svg>
                </ThemeIcon>
                <Text fz='h3' c='white'>
                  Что это дает
                </Text>
              </Group>
              <Text size='sm' c='white' ml={40} mt='xs'>
                Проектные роли, code review, задачи из реального бэклога, релизы - все как в компании
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card radius="lg" bg='dark.5' h="100%">
              <Text fz='h3' c='white' mb='xs'>
                Список проектов
              </Text>
              <List  size="sm" c="white">
                <List.Item>Hexlet SICP - трекер прохождения курса</List.Item>
                <List.Item>Hexlet Correction - сервис для отметок ошибок и опечаток</List.Item>
                <List.Item>Run IT - среда для запуска и проверки кода</List.Item>
                <List.Item>Hexlet Comparator - сравнение онлайн-школ программирования</List.Item>
              </List>
            </Card>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
}

export default CommercialProjects
