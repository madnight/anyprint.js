
var print = process.stdout.write.bind(process.stdout)
var printf = console.log
var println = console.log

// C
exports.printf = printf

// Bash
exports.echo = println

// B
exports.putchar = print

// Python
exports.print = print

// Pascal
exports.writeLn = print

// Java
exports.System = {
    out: {
        println: println,
        printf: printf
    },
// Visual Basic .NET
    Console: {
         Write: print,
         WriteLine: println,
    },
}

// lua
exports.io = {
        write: println
}

// Ada
exports.Ada = {
    Text_IO : {
        Put_Line: println
    }
}

// Go
exports.fmt = {
    Println: println,
    Printf: printf,
    Print: print
}
