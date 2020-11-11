package com.ncr.agent;

import lombok.*;

import java.util.Random;

@ToString(exclude = {"uuid", "name", "channel", "status"})
@EqualsAndHashCode(of = {"uuid"})
@Getter
@Setter
public class Terminal {

  private String uuid, name, channel, status;

  public Terminal() {
  }

  public Terminal(String uuid, String name, String channel) {
    this.uuid = uuid;
    this.name = name;
    this.channel = channel;
    this.setStatus(Statuses.values()[new Random().nextInt(Statuses.values().length)].name());
  }

}
