// TESTING THIS SERVICE - NOT IN USE
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

// Create a music or song .ts to hold a class called song
class Song {}

interface SongListenedByUs {
  created:  number;
  songId:   number;
  spotted?: boolean;
}

@Injectable()
export class SongsService {

    private _activeSongs:     Song[];
    private SongListenedByUs: SongListenedByUs[];
    private locked:          Song[];
    private subjectCreate:   Subject<number[]>;
    private subscriptions:   Subscription;
    private unlocking:       Set<Song>;

  private get filterAllowedExtensions(): string[] {
    return ['tiff', 'jpeg'];
  }

  private get silentAllowedExtensions(): string[] {
    return ['au', 'ogg'];
  }

  private get visibleAllowedExtensions(): string[] {
    return ['mp3', 'wav', 'aiff', 'wma', 'mpeg-4'];
  }

  constructor() {
    this._activeSongs     = this.songListsService.getSongs(HERE_THE_ALBUM_SELECTED);
    this.SongListenedByUs = this.loadSongListenedByUs();
    this.locked           = [];
    this.subjectCreate    = new Subject();
    this.subscriptions    = new Subscription();
    this.unlocking        = new Set();


    // Whenever the Active song list changes, we should sanitize
    // (i.e. check for removal) of songs listened by us

    this.subscriptions.add(this.songListsService.observableJobListChange.subscribe(containerId =>
    {
      if (containerId == CONTAINERID_ACTIVE)
        this.sanitizeSongListeneddByUs();
    }));

  }

  // ngOnDestroy(): void {
  //     this.subscriptions.unsubscribe();
  // }


  // isSongEnabled(songs: Song[]): boolean {
  //   return this.isBaseMergeOrInsertEnabled(jobs)
  //     && jobs.every(job =>
  //         this.canDerasterize(job)
  //         && !job.getBooklet().value
  //         && !job.getAdhBinding().value
  //         && !job.getNup().value
  //         && !job.getNupRepeat().value
  //         &&  job.getPosterPrint().value == ePosterPrint.Off
  //         &&  job.getPageSpecificRepeatMode().value == ePageSpecificRepeatMode.off
  //     );
  // }


}