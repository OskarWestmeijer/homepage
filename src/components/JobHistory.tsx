import { Badge, Text, Timeline, Group, Stack, Title } from '@mantine/core';

export function JobHistory() {
    return (
        <Stack align="center">
            <Title>Jobs</Title>
            <Timeline mt="md" active={4} miw={375} maw={700} color="orange.7">
                <Timeline.Item title="Otto • Warehouse logistics">
                    <Text size="xs" mt="xs">
                        01/2023 - now | software developer
                    </Text>
                    <Text size="sm" mt="sm">
                        My team specializes in the inbound warehouse logistics processes. A company-wide logistics
                        project will launch a new warehouse and software system. We are developing new processes for the
                        go-live and at the same time maintaining existing processes for older warehouses.
                    </Text>
                    <Group mt="xs">
                        <Badge variant="light">java</Badge>
                        <Badge variant="light">spring-boot</Badge>
                        <Badge variant="light">postgresql</Badge>
                        <Badge variant="light">google-cloud</Badge>
                    </Group>
                </Timeline.Item>
                <Timeline.Item title="Shopping24 • Online advertising services">
                    <Text size="xs" mt="xs">
                        03/2019 - 12/2022 | software developer
                    </Text>
                    <Text size="sm" mt="sm">
                        The company promotes advertisers products on the internet. I was involved in developing a
                        microservice pipeline that would import, enrich and publish products. I also worked on a service
                        responsible for redirecting user requests and an invoicing application.
                    </Text>
                    <Group mt="xs">
                        <Badge variant="light">java</Badge>
                        <Badge variant="light">spring-boot</Badge>
                        <Badge variant="light">postgresql</Badge>
                        <Badge variant="light">kubernetes</Badge>
                    </Group>
                </Timeline.Item>
                <Timeline.Item title="Mach • ERP software">
                    <Text size="xs" mt="xs">
                        09/2018 - 12/2018 | software developer
                    </Text>
                    <Text size="sm" mt="sm">
                        Mach AG specializes in the development of an ERP tool. My team was responsible for the HR
                        module. While the position ultimately was not the right fit for me, I was introduced to SCRUM
                        and modern team collaboration practices.
                    </Text>
                    <Group mt="xs">
                        <Badge variant="light">java</Badge>
                    </Group>
                </Timeline.Item>
                <Timeline.Item title="Lübecker Hafen • Port logistics">
                    <Text size="xs" mt="xs">
                        08/2015 - 07/2018 | apprenticeship software developer
                    </Text>
                    <Text size="sm" mt="sm">
                        The largest port in the Baltic Sea region. This port operates an in-house harbor logistics
                        software system. I gained insights into the organizational structure of a medium-sized company.
                        I spent much time working with colleagues in port logistics to better understand how they use
                        the devices and software.
                    </Text>
                    <Group mt="xs">
                        <Badge variant="light">java</Badge>
                    </Group>
                </Timeline.Item>
                <Timeline.Item title="Prior experiences">
                    <Text size="xs" mt="xs">
                        abitur, jobbing, military-service and unfinished university study
                    </Text>
                </Timeline.Item>
            </Timeline>
        </Stack>
    );
}
