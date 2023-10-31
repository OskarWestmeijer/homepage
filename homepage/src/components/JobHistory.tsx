import { Grid, Text, Timeline } from '@mantine/core';

export function JobHistory() {
    return (
      <Grid>
            <Grid.Col span={{ base: 12, md: 3, lg: 3 }} />
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Timeline color="orange" active={4}>
                    <Timeline.Item title="Otto GmbH - Warehouse logistics">
                        <Text size="xs" mt={4}>
                            01/2023 - now | software developer
                        </Text>
                        <Text c="dimmed" size="sm">
                            On an international team that is specialised on warehouse processes, specifically inbound
                            traffic. Company wide logistics project, that will launch a new warehouse and
                            software-system. This requires developing new processes for the go-live and at the same time
                            maintaining existing processes for the old warehouses.
                        </Text>
                    </Timeline.Item>
                    <Timeline.Item title="Shopping24 GmbH (refirmed to mrge) - Online advertising services">
                        <Text size="xs" mt={4}>
                            03/2019 - 12/2022 | software developer
                        </Text>
                        <Text c="dimmed" size="sm">
                            Advertising products of advertisers on the Internet in order to generate customer-traffic.
                            Worked on a microservice pipeline capable of importing, enriching and publishing millions of
                            products. Furthermore routing requests from the platforms to the respective advertiser
                            landingpages.
                        </Text>
                    </Timeline.Item>
                    <Timeline.Item title="Mach AG">
                        <Text size="xs" mt={4}>
                            09/2018 - 12/2018 | software developer
                        </Text>
                        <Text c="dimmed" size="sm">
                            Mach AG develops an ERP-tool. I was on a team responsible for the HR module. This job did
                            not work out for me, but I learned the first time about SCRUM and modern team-work in
                            general. These learning were useful for my next job.
                        </Text>
                    </Timeline.Item>
                    <Timeline.Item title="Lübecker Hafen-Gesellschaft mbH" lineVariant="dashed">
                        <Text size="xs" mt={4}>
                            08/2015 - 07/2018 | apprenticeship software developer
                        </Text>
                        <Text c="dimmed" size="sm">
                            Biggest baltic sea port. The IT-department maintained an internal harbour-logistics
                            software-system. I learned programming in Java. Furthermore I learned how a medium sized
                            company is organized. In addition I spent a lot time with our port-logistics personal, that
                            used our software/hardware.
                        </Text>
                    </Timeline.Item>
                    <Timeline.Item title="not IT related experiences">
                        <Text size="xs" mt={4}>
                            07/2012 - 07/2015 | abitur, jobbing, military-service and not-finsihed university study
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
