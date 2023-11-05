import { Grid, Badge, Text, Timeline, Group } from '@mantine/core';

export function JobHistory() {
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 3, lg: 3 }} />
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Timeline active={4}>
                    <Timeline.Item title="Otto • Warehouse logistics">
                        <Text size="xs" mt={4}>
                            01/2023 - now | software developer
                        </Text>
                        <Text c="dimmed" size="sm">
                            On an international team that is specialised on warehouse processes, with focus on inbound
                            logistics. Part of a company wide logistics project, that will launch a new warehouse and
                            software-system. This requires developing new processes for the go-live and at the same time
                            maintaining existing processes for the old warehouses.
                        </Text>
                        <Group mt="7">
                            <Badge variant="light">java</Badge>
                            <Badge variant="light">spring-boot</Badge>
                            <Badge variant="light">postgresql</Badge>
                            <Badge variant="light">google-cloud</Badge>
                        </Group>
                    </Timeline.Item>
                    <Timeline.Item title="Shopping24 • Online advertising services">
                        <Text size="xs" mt={4}>
                            03/2019 - 12/2022 (part of mrge since 09/2021) | software developer
                        </Text>
                        <Text c="dimmed" size="sm">
                            Advertising products of advertisers on the Internet in order to generate customer-traffic.
                            Worked on a microservice pipeline capable of importing, enriching and publishing millions of
                            products. Furthermore routing requests from the platforms to the respective advertiser
                            landingpages. Originally part of Otto Group, later sold to mrge.
                        </Text>
                        <Group mt="7">
                            <Badge variant="light">java</Badge>
                            <Badge variant="light">spring-boot</Badge>
                            <Badge variant="light">postgresql</Badge>
                            <Badge variant="light">kubernetes</Badge>
                        </Group>
                    </Timeline.Item>
                    <Timeline.Item title="Mach • ERP software">
                        <Text size="xs" mt={4}>
                            09/2018 - 12/2018 | software developer
                        </Text>
                        <Text c="dimmed" size="sm">
                            Mach AG develops an ERP-tool. I was on a team responsible for the HR module. This job did
                            not work out for me, but I learned the first time about SCRUM and modern team-work in
                            general. These learning were useful for my next job.
                        </Text>
                        <Group mt="7">
                            <Badge variant="light">java</Badge>
                        </Group>
                    </Timeline.Item>
                    <Timeline.Item title="Lübecker Hafen • Port logistics">
                        <Text size="xs" mt={4}>
                            08/2015 - 07/2018 | apprenticeship software developer
                        </Text>
                        <Text c="dimmed" size="sm">
                            Biggest baltic sea port. It maintains an internal harbour-logistics software-system. I was
                            introduced to programming in Java. Furthermore I learned how a medium sized company is
                            organized. In addition I spent much time with the port-logistics colleagues, to understand
                            how they use our software.
                        </Text>
                        <Group mt="7">
                            <Badge variant="light">java</Badge>
                            <Badge variant="light">typo3</Badge>
                        </Group>
                    </Timeline.Item>
                    <Timeline.Item title="not IT related experiences">
                        <Text size="xs" mt={4}>
                            07/2012 - 07/2015 | abitur, jobbing, military-service and not-finished university study
                        </Text>
                        <Text c="dimmed" size="sm">
                            Before learning the software-developer profession I had several other stops.
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3, lg: 3 }} />
        </Grid>
    );
}
