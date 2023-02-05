Console_How to Call Other Commands
==================================

https://symfony.com/doc/current/console/calling_commands.html

If a command depends on another one being run before it

Use the `find()` method to find the command you want to run by passing the command name. Then, create a new `ArrayInput` with the arguments and options you want to pass to the command.

Eventually, calling the `run()` method actually runs the command and returns the returned code from the command (return value from command's `execute()` method):


```php
use Symfony\Component\Console\Command;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class CreateUserCommand extends Command
{
    // ...

    protected function execute(InputInterface $input, OutputInterface $output): void
    {
        $command = $this->getApplication()->find('demo:greet');

        $arguments = [
            'name'    => 'Fabien',
            '--yell'  => true,
        ];

        $greetInput = new ArrayInput($arguments);
        $returnCode = $command->run($greetInput, $output);

        // ...
    }
}
```