package com.ncr.agent;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Component;

@Component
public class AgentSynch {

    public static final Logger log = LoggerFactory.getLogger(AgentSynch.class);
    private final AgentProcessor processor;

    @Autowired
    public AgentSynch(AgentProcessor processor) {
        this.processor = processor;
    }

    @StreamListener(AgentProcessor.TERMINALS_IN)
    public void synchAndChangeState(Terminal terminal) {
        log.info("{} {} for {}", terminal.getStatus(), terminal.getUuid(), terminal.getName());

        if (terminal.getStatus().equals(Statuses.PENDING.name())
                || terminal.getStatus().equals(Statuses.ERROR.name())) {
            terminal.setStatus(Statuses.ACTIVE.name());
            processor.active().send(message(terminal));
        } else if (terminal.getStatus().equals(Statuses.ACTIVE.name())) {
            terminal.setStatus(Statuses.ERROR.name());
            processor.error().send(message(terminal));
        }

        log.info("{} {} for {}", terminal.getStatus(), terminal.getUuid(), terminal.getName());

    }

    private static <T> Message<T> message(T val) {
        return MessageBuilder.withPayload(val).build();
    }
}
