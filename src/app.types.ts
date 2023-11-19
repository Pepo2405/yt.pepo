export interface  Format {
  mimeType:         string;
  qualityLabel:     null | string;
  bitrate:          number;
  audioBitrate:     number;
  itag:             number;
  url:              string;
  width?:           number;
  height?:          number;
  lastModified:     string;
  contentLength?:   string;
  quality:          string;
  fps?:             number;
  projectionType:   string;
  averageBitrate?:  number;
  audioQuality:     'AUDIO_QUALITY_LOW' | 'AUDIO_QUALITY_MEDIUM';
  approxDurationMs: string;
  audioSampleRate:  string;
  audioChannels:    number;
  hasVideo:         boolean;
  hasAudio:         boolean;
  container:        string;
  codecs:           string;
  videoCodec:       null | string;
  audioCodec:       string;
  isLive:           boolean;
  isHLS:            boolean;
  isDashMPD:        boolean;
  initRange?:       Range;
  indexRange?:      Range;
  loudnessDb?:      number;
  highReplication?: boolean;
}

export interface Range {
  start: string;
  end:   string;
}
