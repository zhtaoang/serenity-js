import { TodoList } from '../user_interface/todo_list';

import { Enter, PerformsTasks, Task, step } from 'serenity-js/lib/screenplay-protractor';

import { protractor } from 'protractor/globals';

export class AddATodoItem implements Task {

    public static called(name: string): AddATodoItem {
        return new AddATodoItem(name);
    }

    @step('{0} adds a todo item called "#name"')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Enter.theValue(this.name)
                .into(TodoList.What_Needs_To_Be_Done)
                .thenHit(protractor.Key.ENTER)
        );
    }

    constructor(public name: string) {
    }
}
