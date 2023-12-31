import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Avatar } from "@mui/material";
import { ReactElement } from "react";

const CV = (): ReactElement => {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <Avatar />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Baral Geohaus-Consulting</TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineSeparator>
                    <Avatar />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>M.Sc.</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <Avatar />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    B.Sc.
                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineSeparator>
                    <Avatar />
                </TimelineSeparator>
                <TimelineContent>BufDi</TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default CV;