class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
//Hash funciton to hash key
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    //set a key value pair
    set(key, value) {
        const index = this.hash(key)
        // this.table[index]=value
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    //retrive a value based on the key
    get(key) {
        const index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find(item => item[0 ] === key)
            if(sameKeyItem){
                return sameKeyItem
            }
        }
        return undefined
    }

//Delete a key value pair
    remove(key) {
        const index = this.hash(key)
        // this.table[index] = undefined
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem=bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }

//To print the hashtable
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(50)

table.set("name", "Bruce")
table.set("age", 25)

table.display()

console.log(table.get('name'));

table.set("mane", "Clark")  // this is a bug , becuse if the key contain the same set of charecter, (eg: name & mane),the hash function generate the same index ,  that will over write ( This is called Collision)
// To avoid collision there have somny methods,
// one method is instead of saving a value , save as an Array
table.display()

// table.remove("name")
// table.display()