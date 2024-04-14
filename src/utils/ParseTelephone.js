export function parseTelephone(telephone = ''){

    return [
        `+${telephone.slice(0, 2)}`,//54
        telephone.slice(2, 3),//9
        telephone.slice(3, 6),//381
        `${telephone.slice(-7, -4)}-${telephone.slice(-4)}`//000-0000
    ]
    .join(' ')
}