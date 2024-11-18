import { IInfo } from 'src/app/shared/interfaces';

import { FIXING_LAST_COMMIT } from './all/fixing-last-commit';
import { DISABLE_FILE_CHANGE_TRACKING } from './all/disable-file-change-tracking';
import { CLONING_STRIPPED_DOWN_REPOSITORY } from './all/cloning-stripped-down-repository';
import { DIRECTORY_CLEANING } from './all/directory-cleaning';
import { GIT_STASH } from './all/git-stash';
import { GIT_RESET_FLAGS } from './all/git-reset-flags';
import { GIT_CHECKOUT } from './all/git-checkout';
import { GIT_REVERT } from './all/git-revert';
import { ADD_ALL_FILES_IN_COMMIT } from './all/add-all-files-in-commit';
import { GIT_CHERRY_PICK } from './all/git-cherry-pick';
import { INTERACTIVE_REBASE } from './all/interactive-rebase';

export const allGitInfo: IInfo[] = [
    { chapter: 'Сохранение изменений' },
    GIT_STASH,
    ADD_ALL_FILES_IN_COMMIT,
    { chapter: 'Отмена сделанных изменений' },
    DIRECTORY_CLEANING,
    GIT_RESET_FLAGS,
    GIT_CHECKOUT,
    GIT_REVERT,
    { chapter: 'Прочее' },
    FIXING_LAST_COMMIT,
    DISABLE_FILE_CHANGE_TRACKING,
    CLONING_STRIPPED_DOWN_REPOSITORY,
    GIT_CHERRY_PICK,
    INTERACTIVE_REBASE,
];
