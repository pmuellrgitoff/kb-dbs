interface Process {
  memory: {
    heap: {
      total_bytes: number
      used_bytes: number
      size_limit: number
    }
    resident_set_size_bytes: number
  }
  pid: number
  event_loop_delay: number
  event_loop_delay_histogram: {
    min: number
    max: number
    mean: number
    exceeds: number
    stddev: number
    from_timestamp: string
    last_updated_at: string
    percentiles: {
      50: number
      75: number
      95: number
      99: number
    }
  }
  uptime_ms: number
}

export interface KbfStats {
  process: Process
  processes: Process[]
  os: {
    platform: string
    platform_release: string
    load: {
      '1m': number
      '5m': number
      '15m': number
    }
    memory: {
      total_bytes: number
      free_bytes: number
      used_bytes: number
    }
    uptime_ms: number
    distro: string
    distro_release: string
  }
  elasticsearch_client: {
    total_active_sockets: number
    total_idle_sockets: number
    total_queued_requests: number
  }
  requests: {
    disconnects: number
    total: number
    status_codes: {
      '200': number
      '302': number
      '404': number
    }
  }
  response_times: {
    avg_ms: number
    max_ms: number
  }
  concurrent_connections: number
  kibana: {
    uuid: string
    name: string
    index: string
    host: string
    locale: string
    transport_address: string
    version: string
    snapshot: boolean
    status: string
  }
  last_updated: string
  collection_interval_ms: number
}


// copy of the relevant file from the diagnostics bundle, for type checking
const Stats: KbfStats = {
  "process": {
    "memory": {
      "heap": {
        "total_bytes": 5897179136,
        "used_bytes": 355339640,
        "size_limit": 851443712
      },
      "resident_set_size_bytes": 558456832
    },
    "pid": 17,
    "event_loop_delay": 12.758484787723786,
    "event_loop_delay_histogram": {
      "min": 9.068544,
      "max": 283.901951,
      "mean": 12.758484787723786,
      "exceeds": 0,
      "stddev": 17.27153542694061,
      "from_timestamp": "2023-05-27T14:33:51.719Z",
      "last_updated_at": "2023-05-27T14:33:56.715Z",
      "percentiles": {
        "50": 10.092543,
        "75": 10.239999,
        "95": 20.627455,
        "99": 46.759935
      }
    },
    "uptime_ms": 11662424166.778257
  },
  "processes": [
    {
      "memory": {
        "heap": {
          "total_bytes": 5897179136,
          "used_bytes": 355339640,
          "size_limit": 851443712
        },
        "resident_set_size_bytes": 558456832
      },
      "pid": 17,
      "event_loop_delay": 12.758484787723786,
      "event_loop_delay_histogram": {
        "min": 9.068544,
        "max": 283.901951,
        "mean": 12.758484787723786,
        "exceeds": 0,
        "stddev": 17.27153542694061,
        "from_timestamp": "2023-05-27T14:33:51.719Z",
        "last_updated_at": "2023-05-27T14:33:56.715Z",
        "percentiles": {
          "50": 10.092543,
          "75": 10.239999,
          "95": 20.627455,
          "99": 46.759935
        }
      },
      "uptime_ms": 11662424166.778257
    }
  ],
  "os": {
    "platform": "linux",
    "platform_release": "linux-5.4.0-1032-gcp",
    "load": { "1m": 3.03, "5m": 3.05, "15m": 2.96 },
    "memory": {
      "total_bytes": 71772635136,
      "free_bytes": 27920613376,
      "used_bytes": 43852021760
    },
    "uptime_ms": 53993973970,
    "distro": "Ubuntu",
    "distro_release": "Ubuntu-20.04"
  },
  "elasticsearch_client": {
    "total_active_sockets": 1,
    "total_idle_sockets": 26,
    "total_queued_requests": 0
  },
  "requests": {
    "disconnects": 0,
    "total": 14,
    "status_codes": { "200": 13, "302": 1, "404": 1 }
  },
  "response_times": { "avg_ms": 353.93333333333334, "max_ms": 3319 },
  "concurrent_connections": 6,
  "kibana": {
    "uuid": "537c0cfe-f21f-431a-abfd-af3fb2dc6721",
    "name": "instance-0000000000",
    "index": ".kibana",
    "host": "0.0.0.0",
    "locale": "en",
    "transport_address": "0.0.0.0:18317",
    "version": "8.6.0",
    "snapshot": false,
    "status": "yellow"
  },
  "last_updated": "2023-05-27T14:33:56.718Z",
  "collection_interval_ms": 5000
}
