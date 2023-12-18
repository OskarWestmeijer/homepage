import { Badge, Text, Timeline, Group, Center } from '@mantine/core';

export function JobHistory() {
    return (
        <Center>
            <Timeline active={4} maw={700}>
                <Timeline.Item title="Otto • Warehouse logistics">
                    <Text size="xs" mt={4}>
                        01/2023 - present | software developer
                    </Text>
                    <Text size="sm" mt={4}>
                        Specializing in inbound warehouse logistics processes. Our team is part of a company-wide
                        logistics responsible for the launch of a new warehouse and software system. This involves
                        developing new processes for the go-live while simultaneously managing and maintaining existing
                        processes for the old warehouses.
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
                    <Text size="sm" mt={4}>
                        The company promotes products from advertisers on the internet, aiming to boost customer
                        traffic. I was involved in developing a microservice pipeline that could efficiently import,
                        enhance, and publish a vast number of products. In addition, I also contributed to the
                        development of our invoicing application and a service responsible for directing user traffic to
                        the landing pages of advertisers.
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
                    <Text size="sm" mt={4}>
                        Mach AG specializes in the development of an ERP tool. During my stay there, I was part of the
                        team responsible for the HR module. While the position ultimately was not the right fit for me,
                        it was during this time that I was introduced to SCRUM and modern team collaboration practices.
                    </Text>
                    <Group mt="7">
                        <Badge variant="light">java</Badge>
                    </Group>
                </Timeline.Item>
                <Timeline.Item title="Lübecker Hafen • Port logistics">
                    <Text size="xs" mt={4}>
                        08/2015 - 07/2018 | apprenticeship software developer
                    </Text>
                    <Text size="sm" mt={4}>
                        The largest port in the Baltic Sea region, this port operates an in-house harbor logistics
                        software system. I gained valuable insights into the organizational structure of a medium-sized
                        company. I also dedicated a considerable amount of time working closely with my colleagues in
                        port logistics to better comprehend how they utilize our software.
                    </Text>
                    <Group mt="7">
                        <Badge variant="light">java</Badge>
                    </Group>
                </Timeline.Item>
                <Timeline.Item title="Prior experiences">
                    <Text size="xs" mt={4}>
                        07/2012 - 07/2015 | abitur, jobbing, military-service and unfinished university study
                    </Text>
                </Timeline.Item>
            </Timeline>
        </Center>
    );
}
